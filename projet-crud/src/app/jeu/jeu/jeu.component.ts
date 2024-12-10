import { NgForOf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Jeu } from '../../models/jeu.model';
import { JeuService } from '../../services/JeuService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Jeu',
  templateUrl: './jeu.component.html',
  standalone: true,
  imports: [NgForOf, MatTableModule, MatPaginatorModule],
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit {

  displayedColumns: string[] = ['nom', 'description', 'quantite', 'point_geo', 'supprimer', 'modifier'];
  

  jeux!: MatTableDataSource<Jeu>;
  @ViewChild(MatPaginator) paginator! : MatPaginator;

  constructor(private readonly jeuService: JeuService, private router: Router){
  }

  loadJeux(): void {
    this.jeuService.getList().subscribe(value => {
        this.jeux = new MatTableDataSource<Jeu>(value); 
        this.jeux.paginator = this.paginator;
    });
}
  ngOnInit(): void {
    this.loadJeux(); // Charger les jeux au démarrage

  }
  onDelete(jeu: Jeu): void {
    if (confirm(`Voulez-vous vraiment supprimer le jeu "${jeu.nom}" ?`)) {
      this.jeuService.deleteJeu(jeu.id).subscribe({
        next: () => {
          // Supprimer le jeu localement dans le tableau pour rafraîchir la table
          alert('Le jeu a été supprimé avec succès.');
          this.loadJeux(); // Recharger les jeux après suppression

        },
        error: (err) => {
          console.error('Erreur lors de la suppression :', err);
          alert('Une erreur s\'est produite lors de la suppression.');
        }
      });
    }
  }
  update(element: Jeu): void {
    this.router.navigate(['/modifier', element.id]); // Redirection avec l'ID du jeu
  }

  
}

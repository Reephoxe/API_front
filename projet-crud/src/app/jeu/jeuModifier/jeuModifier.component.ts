import { CommonModule, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { JeuService } from '../../services/JeuService';
import { Jeu } from '../../models/jeu.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-JeuModifier',
    templateUrl: './jeuModifier.component.html',
    standalone: true,
    imports: [NgForOf, MatTableModule, MatPaginatorModule, CommonModule, FormsModule  ],
    styleUrls: ['./jeuModifier.component.css']
  })
export class JeuModifierComponent implements OnInit{

  jeux!: Jeu;

    constructor(private route: ActivatedRoute, private jeuService: JeuService, private router: Router) {}

    ngOnInit(): void {
      // Récupérer l'ID depuis la route
      const id = Number(this.route.snapshot.paramMap.get('id'));
  
      // Charger les données du jeu à partir de l'ID
      this.jeuService.getById(id).subscribe(value => {
        this.jeux = value; 
      });
    }

    modifier(): void {
      this.jeuService.updadeJeu(this.jeux.id, this.jeux).subscribe({
        next: () => {
          alert('Jeu mis à jour avec succès !');
          this.router.navigate(['/']); // Redirection vers la liste des jeux
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour :', err);
          alert('Une erreur s\'est produite lors de la mise à jour.');
        }
      });
    }
  
    cancel(): void {
      if (confirm(`Voulez-vous vraiment annuler ?`)) {
        this.router.navigate(['/']); // Redirection vers la liste des jeux
      }
    }
}

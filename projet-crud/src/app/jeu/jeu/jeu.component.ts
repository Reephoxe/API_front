import { NgForOf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Jeu } from '../../models/jeu.model';
import { JeuService } from '../../services/JeuService';
import { Router } from '@angular/router';
import { MatButton, MatButtonModule } from '@angular/material/button';

/**
 * Composant Angular pour afficher la liste des jeux dans une table.
 * 
 * Ce composant utilise Angular Material pour afficher une table paginée contenant des informations
 * sur les jeux, ainsi que des options pour les modifier ou les supprimer.
 */
@Component({
  selector: 'app-Jeu',
  templateUrl: './jeu.component.html',
  standalone: true,
  imports: [NgForOf, MatTableModule, MatPaginatorModule, MatButtonModule],
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit {

  /** 
   * Colonnes affichées dans la table Angular Material.
   */
  displayedColumns: string[] = ['nom', 'description', 'quantite', 'point_geo', 'supprimer', 'modifier'];
  
  /** 
   * Source de données pour la table contenant la liste des jeux. Peut être null
   */
  jeux!: MatTableDataSource<Jeu>;

  /**
   * Référence au **paginator** de la table pour la pagination. Prépare pour la pagination du tableau
   */
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  /**
   * Initialise le composant avec les services nécessaires.
   * @param jeuService Service pour gérer les requêtes liées aux jeux.
   * @param router Service de navigation pour rediriger vers d'autres pages.
   */
  constructor(private readonly jeuService: JeuService, private router: Router) {
  }

  /**
   * Charge la liste des jeux depuis le service et l'associe à la source de données de la table.
   * Configure également la pagination.
   */
  loadJeux(): void {
    this.jeuService.getList().subscribe(value => {
        this.jeux = new MatTableDataSource<Jeu>(value); 
        this.jeux.paginator = this.paginator;
    });
  }

  /**
   * Méthode appelée lors de l'initialisation du composant.
   * Charge les jeux pour afficher la table.
   */
  ngOnInit(): void {
    this.loadJeux(); // Charger les jeux au démarrage
  }

  /**
   * Supprime un jeu après confirmation.
   * @param jeu Le jeu sélectionné à supprimer.
   */
  onDelete(jeu: Jeu): void {
    if (confirm(`Voulez-vous vraiment supprimer le jeu "${jeu.nom}" ?`)) {
      this.jeuService.deleteJeu(jeu.id).subscribe({
        next: () => {
          alert('Le jeu a été supprimé avec succès.');
          this.loadJeux(); // Recharger les jeux après suppression
        },
        error: (err) => {
          console.error('Erreur lors de la suppression :', err); //on affiche les détails de l'erreur à l'utilisatuer
          alert('Une erreur s\'est produite lors de la suppression.');
        }
      });
    }
  }

  /**
   * Redirige vers la page de modification du jeu sélectionné
   * @param element Le jeu sélectionné à modifier.
   */
  update(element: Jeu): void {
    this.router.navigate(['/modifier', element.id]); // Redirection avec l'ID du jeu
  }

}

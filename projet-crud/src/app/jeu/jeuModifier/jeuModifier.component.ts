import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from "@angular/material/button";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { ActivatedRoute, Router } from '@angular/router';
import { Jeu } from '../../models/jeu.model';
import { JeuService } from '../../services/JeuService';

/**
 * Composant permettant de modifier un jeu existant.
 */
@Component({
    selector: 'app-JeuModifier',
    templateUrl: './jeuModifier.component.html',
    standalone: true,
    imports: [NgForOf, 
              ReactiveFormsModule,
              MatFormField,
              MatInput,
              MatButton,
              MatLabel
    ],
    styleUrls: ['./jeuModifier.component.css']
})
export class JeuModifierComponent implements OnInit {
  /** Le formulaire utilisé pour modifier les données du jeu, peut être null */
  jeuForm!: FormGroup;

  /** L'identifiant unique du jeu à modifier, peut être null*/
  jeuId!: number;

  /**
   * Constructeur du composant.
   * @param route - Service pour récupérer les paramètres de la route.
   * @param jeuService - Service pour gérer les opérations liées aux jeux.
   * @param router - Service pour la navigation entre les pages.
   * @param fb - FormBuilder pour créer et gérer les formulaires.
   */
  constructor(
    private route: ActivatedRoute,
    private jeuService: JeuService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  /**
   * Initialisation du composant. Récupère l'ID du jeu depuis l'URL et initialise le formulaire.
   */
  ngOnInit(): void {
    // Récupération de l'ID à partir des paramètres de la route
    this.jeuId = Number(this.route.snapshot.paramMap.get('id'));

    // Initialisation du formulaire
    this.jeuForm = this.fb.group({
      nom: [''],
      description: [''],
      quantite: [''],
      point_geo: ['']
    });

    // Chargement des données du jeu à partir de l'ID
    this.jeuService.getById(this.jeuId).subscribe({
      next: (jeu) => {
        // Mise à jour des valeurs du formulaire avec les données du jeu
        this.jeuForm.patchValue({
          nom: jeu.nom,
          description: jeu.description,
          quantite: jeu.quantite,
          point_geo: jeu.point_geo
        });
      },
      error: (err) => {
        console.error('Erreur lors du chargement des données du jeu :', err);
      }
    });
  }

  /**
   * Envoie les modifications pour mettre à jour le jeu.
   * Affiche une alerte en cas de succès ou d'erreur.
   */
  modifier(): void {
    // on créer le jeu Modifier en amond avant de le modifier en BDD
    const jeuModifier: Jeu = {
      id: this.jeuId,
      nom: this.jeuForm.get('nom')?.value, // le ? permet de ne pas provoquer d'erreur si la valeur de nom est null ou undefined
      description: this.jeuForm.get('description')?.value,
      quantite: this.jeuForm.get('quantite')?.value,
      point_geo: this.jeuForm.get('point_geo')?.value
    };

    // Appel au service pour mettre à jour le jeu
    this.jeuService.updadeJeu(this.jeuId, jeuModifier).subscribe({ //subscribe permet d'écouter les émissions d'un Observable
      next: () => { //est appelé quand la mise à jour est bien réussi (permet également la gestion d'erreur)
        alert(jeuModifier.nom + ' mis à jour avec succès !'); 
        this.router.navigate(['/']); // Redirection vers la liste des jeux
      },
      error: (err) => {//En cas d'erreur
        console.error('Erreur lors de la mise à jour :', err); //on affiche l'erreur dans les logs pour plus d'infos en cas de besoin
        alert('Une erreur s\'est produite lors de la mise à jour.'); //affichage pour l'utilisateur
      }
    });
  }

  /**
   * Annule les modifications et redirige vers la liste des jeux.
   * Demande confirmation avant d'annuler.
   */
  cancel(): void {
    if (confirm(`Voulez-vous vraiment annuler ?`)) {
      this.router.navigate(['/']); // Redirection vers la liste des jeux
    }
  }
}

import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from "@angular/material/button";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { ActivatedRoute, Router } from '@angular/router';
import { Jeu } from '../../models/jeu.model';
import { JeuService } from '../../services/JeuService';



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
export class JeuModifierComponent implements OnInit{
  jeuForm!: FormGroup;
  jeuId!: number;  
    
    constructor(private route: ActivatedRoute, private jeuService: JeuService, private router: Router, private fb : FormBuilder) {
    }

 
    ngOnInit(): void {
      this.jeuId = Number(this.route.snapshot.paramMap.get('id'));
      this.jeuForm = this.fb.group({
        nom : [''],
        description: [''],
        quantite: [''],
        point_geo: ['']
      });
      //Charger les données du jeu
      this.jeuService.getById(this.jeuId).subscribe({
        next: (jeu) =>{
          // on met à jour les valeurs du formulaire
          this.jeuForm.patchValue({
            nom: jeu.nom,
            description: jeu.description,
            quantite: jeu.quantite,
            point_geo: jeu.point_geo
          });
        }
      });
      
    }
    modifier(): void {
      const jeuModifier: Jeu = {
        id: this.jeuId,  
        nom: this.jeuForm.get('nom')?.value,
        description: this.jeuForm.get('description')?.value,
        quantite: this.jeuForm.get('quantite')?.value,
        point_geo: this.jeuForm.get('point_geo')?.value
      };

      this.jeuService.updadeJeu(this.jeuId, jeuModifier).subscribe({
        next: () => {
          alert(jeuModifier.nom + ' mis à jour avec succès !');
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

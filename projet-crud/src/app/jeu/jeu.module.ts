import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JeuComponent } from './jeu/jeu.component';
import { JeuModifierComponent } from './jeuModifier/jeuModifier.component';

@NgModule({ // Déclaration du module
    declarations: [ // Déclaration des composants du module
        JeuComponent,
        JeuModifierComponent
    ],
    imports: [ // Imports des éléments utilisés dans le module
        CommonModule,

    ]
})
export class JeuModule { }

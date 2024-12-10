import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JeuComponent } from './jeu/jeu.component';
import { JeuModifierComponent } from './jeuModifier/jeuModifier.component';

@NgModule({
    declarations: [
        JeuComponent,
        JeuModifierComponent
    ],
    imports: [
        CommonModule,

    ]
})
export class JeuModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import {UtilisateurRoutingModule} from './utilisateur-routing.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    UtilisateurComponent,
    UtilisateurRoutingModule
  ]
})
export class UtilisateurModule { }

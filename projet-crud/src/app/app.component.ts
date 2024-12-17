import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UtilisateurComponent } from './utilisateur/utilisateur/utilisateur.component';
import { ReservationComponent } from './reservation/reservation/reservation.component';


@Component({ // Déclaration de l'application générale, correspond à notre header dans chaque page 
  selector: 'app-root', // Choix du composant racine 
  standalone: true, // Rend le composant "autonome"
  imports: [ //Imports du composant
    UtilisateurComponent,
    ReservationComponent,
    RouterOutlet,
    RouterLink
  ], 
  templateUrl: './app.component.html', //
  styleUrl: './app.component.css'      // Connexion avec les html et css du composant 
})
export class AppComponent {
  title = 'projet-crud'; //Nom affiché sur l'onglet où est ouverte l'application 
}

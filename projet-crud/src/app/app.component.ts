import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UtilisateurComponent } from './utilisateur/utilisateur/utilisateur.component';
import { ReservationComponent } from './reservation/reservation.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UtilisateurComponent,
    ReservationComponent,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projet-crud';
}

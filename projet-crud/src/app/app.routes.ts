import { Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';



export const routes: Routes = [
    { path: '', redirectTo: '/utilisateurs', pathMatch: 'full' },
    { path: 'utilisateurs', loadComponent: () => import('./utilisateur/utilisateur/utilisateur.component').then(m => m.UtilisateurComponent) },
    { path: 'reservations', component: ReservationComponent }
];

import { Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';



export const routes: Routes = [
    {path : '', redirectTo: '/utilisateurs', pathMatch:'full'},
    {path: 'utilisateurs', loadChildren:() => import('./utilisateur/utilisateur.module').then(m => m.UtilisateurModule)},
    {path: 'reservations', component: ReservationComponent}
];

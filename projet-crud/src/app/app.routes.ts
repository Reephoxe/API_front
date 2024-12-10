import { Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation/reservation.component';
import { JeuComponent } from './jeu/jeu/jeu.component';
import { UtilisateurComponent } from './utilisateur/utilisateur/utilisateur.component';
import { MapComponent } from './map/map.component';



export const routes: Routes = [
    { path: '', redirectTo: '/jeux', pathMatch: 'full' },
    { path: 'utilisateurs', component: UtilisateurComponent},
    { path: 'reservations', component: ReservationComponent },
    { path: 'jeux', component: JeuComponent},
    { path: 'map', component: MapComponent}
];

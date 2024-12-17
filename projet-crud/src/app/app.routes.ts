import { Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation/reservation.component';
import { JeuComponent } from './jeu/jeu/jeu.component';
import { MapComponent } from './map/map.component';
import { JeuModifierComponent} from './jeu/jeuModifier/jeuModifier.component';



export const routes: Routes = [ //Gestion des routes de l'application
    { path: '', redirectTo: '/jeux', pathMatch: 'full' }, // Redirection automatique vers la page avec le tableau des aires de jeux 
    { path: 'reservations', component: ReservationComponent }, // Lien vers le tableau des réservations
    { path: 'jeux', component: JeuComponent}, // Lien vers le tableau des aires de jeux 
    { path: 'map', component: MapComponent}, // Lien vers la carte interactive 
    { path: 'modifier/:id', component: JeuModifierComponent}, // Lien vers le formulaire de modification des jeux
];

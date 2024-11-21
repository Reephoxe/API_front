import { Routes } from '@angular/router';

export const routes: Routes = [
    {path : '', redirectTo: '/utilisateurs', pathMatch:'full'},
    {path: 'utilisateurs', loadChildren:() => import('./utilisateur/utilisateur.module').then(m => m.UtilisateurModule)}
];

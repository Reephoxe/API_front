import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withFetch} from '@angular/common/http';

export const appConfig: ApplicationConfig = { // Configuration de l'application 
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Détection des évènement dans l'application
    provideRouter(routes), // Paramétrage des routes (liens de navigation du header)
    provideClientHydration(), // Ajout des composants intéractifs sur l'application 
    provideHttpClient(withFetch()) // Récupération du client 
  ]
};
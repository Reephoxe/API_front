
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { JeuService } from './JeuService';

@Injectable({ // Marquage de l'injection de dépendances pour la classe 
  providedIn: 'root' // Indiquation de la localisation où les données doivent être récupérées
})
export class MarkerService { // Classe de "manipulation" des données liées aux marqueurs de la carte intéractive
  
  constructor(private jeuService: JeuService) { } // Constructeur par défaut 
    
  AddJeuMarker(map : L.Map) : void { // Ajout d'un marqueur sur la carte intéractive 
    this.jeuService.getList().subscribe((res: any) => { // Récupération de la liste des aires de jeux 
      for (const coordonne of res) { // pour chaque aire de jeux 
        const coord : string[] = coordonne.point_geo.split(",");  // Création de l'étiquette du marqueur de la boucle en cours 
        const lat =  coord[0];  // Latitude du marqueur de la boucle en cours 
        const lon = coord[1]; //Longitude du marqueur de la boucle en cours
        const marker = L.marker([ parseFloat(lat), parseFloat(lon)]).bindPopup(coordonne.nom); // Création du marqueur 
        
        marker.addTo(map); // Ajout du marqueur sur la map
      }
    });

  }
}

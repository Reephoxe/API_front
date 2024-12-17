import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../services/Marker.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';        //
const iconUrl = 'assets/marker-icon.png';                 //
const shadowUrl = 'assets/marker-shadow.png';             //
const iconDefault = L.icon({                              //
  iconRetinaUrl,                                          //
  iconUrl,                                                //
  shadowUrl,                                              // Paramétrage de la map (taille, icons, position...)
  iconSize: [25, 41],                                     //
  iconAnchor: [12, 41],                                   //
  popupAnchor: [1, -34],                                  //
  tooltipAnchor: [16, -28],                               //
  shadowSize: [41, 41]                                    //
});                                                       //
L.Marker.prototype.options.icon = iconDefault;            //

@Component({  // Déclaration du composant 
  selector: 'app-map', // Choix du composant racine 
  standalone:true,  // Rend le composant "autonome"
  templateUrl: './map.component.html', // Type d'URL pour l'affichage (html) 
  styleUrls: ['./map.component.css']  // Type d'URL pour les styles (css)
})
export class MapComponent implements AfterViewInit { // Classe permettant de manipuler la carte intéractive
  private map: any; // Création de l'objet 

  private initMap(): void { // Fonction d'initialisation de la carte
    this.map = L.map('map', { // Réglage de la carte sur la page
      center: [ 47.393748, 0.689587], // Position du centre de la carte 
      zoom: 13  // Zoom initial sur la carte
    });

  

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { //import des options des tuiles composants la carte 
      maxZoom: 18, // Zoom maximum sur les tuiles
      minZoom: 3, // "Dezoom" maximum sur les tuiles 
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' // Fond de la carte (rues, batiments...)
    });

    tiles.addTo(this.map); // Ajout des tuiles précédement initialisé à la carte
  }

  constructor(private markerService: MarkerService) { } // Constructeur par défaut 

  ngAfterViewInit(): void {  // Lancement au chargement de la page 
    this.initMap(); // Lance l'initialisation de la map
    this.markerService.AddJeuMarker(this.map); // Ajoute les marqueurs sur la carte 

  }
}
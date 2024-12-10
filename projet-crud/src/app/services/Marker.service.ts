
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { JeuService } from './JeuService';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  
  constructor(private jeuService: JeuService) { }
    
  AddJeuMarker(map : L.Map) : void {
    this.jeuService.getList().subscribe((res: any) => {
      for (const coordonne of res) {
        const coord : string[] = coordonne.point_geo.split(",");
        const lat =  coord[0];
        const lon = coord[1];
        const marker = L.marker([ parseFloat(lat), parseFloat(lon)]).bindPopup(coordonne.nom);
        
        marker.addTo(map);
      }
    });

  }
}

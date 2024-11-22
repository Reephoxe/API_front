import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Reservation } from '../models/reservation.model';
import { Router } from '@angular/router';
import { ReservationService } from '../services/ReservationService';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [NgFor,FormsModule, CommonModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {
  reservations: Reservation[] = [
    { jeux_id : 42, utilisateur_id : 1, reservation: 3 },
  ]; // Tableau pour stocker la liste des réservations
  selectedRow: Reservation | null = null;

  constructor(private reservationService: ReservationService, private router: Router) { }
  ngOnInit(): void {
  this.getReservations(); //Appel de la méthode pour récupérer les réservations au chargement du composant
  }
  selectRow( reservation : Reservation) {
    if (reservation) {
      this.selectedRow = { ...reservation }; // Clone pour éviter de modifier directement l'objet
    } else {
      console.error('Aucune donnée');
    }
  } 
  // Méthode pour récupérer les réservations  et les stocker 
  getReservations(): void {
    this.reservationService.getAll().subscribe(
      (data) => {
      this.reservations = data;
      });
    }
}

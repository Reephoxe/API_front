import { NgForOf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Reservation } from '../../models/reservation.model';
import { ReservationService } from '../../services/ReservationService';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-Reservation',
  templateUrl: './reservation.component.html',
  standalone: true,
  imports: [NgForOf, MatTableModule, MatPaginatorModule, FormsModule],
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  displayedColumns: string[] = ['reservation', 'utilisateur_id', 'jeux_id'];

  reservation!: MatTableDataSource<Reservation>;
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  newReservation: Reservation = { utilisateur_id: null, jeux_id : null};

  constructor(private readonly reservationService: ReservationService){
  }

  ngOnInit(): void {
    this.reservationService.getAll().subscribe(value => {
      this.reservation = new MatTableDataSource<Reservation>(value);
      this.reservation.paginator = this.paginator;
    })
  }

  onSubmit(): void {
    if (this.newReservation.utilisateur_id && this.newReservation.jeux_id) {
      // Créer la réservation via le service
      this.reservationService.createReservation(this.newReservation).subscribe(
        (reservation: Reservation) => {
          // Ajouter la réservation créée à la liste des réservations
          this.reservation.data.push(reservation);
          this.reservation._updateChangeSubscription();  // Mettre à jour la table
          // Réinitialiser le formulaire
          this.newReservation = { utilisateur_id: null, jeux_id: null };
        },
        error => {
          console.error('Erreur lors de la création de la réservation', error);
        }
      );
    }
  }


}

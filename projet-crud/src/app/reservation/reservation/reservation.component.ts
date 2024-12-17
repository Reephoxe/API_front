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
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  newReservation: Reservation = { utilisateur_id: null, jeux_id: null, reservation: null};

  constructor(private readonly reservationService: ReservationService) {
  }

  ngOnInit(): void {
    this.reservationService.getAll().subscribe(value => {
      this.reservation = new MatTableDataSource<Reservation>(value);
      this.reservation.paginator = this.paginator;
    })
  }
  //Fonction d'ajout d'une nouvelle réservation via le formulaire
  onSubmit(): void {
    if (this.newReservation.utilisateur_id && this.newReservation.jeux_id && this.newReservation.reservation) {
      this.reservationService.createReservation(this.newReservation).subscribe(
        (reservation: Reservation) => { //Création de l'objet Réservation
          this.reservation.data.push(reservation); // Ajout de l'objet 
          this.reservation._updateChangeSubscription(); // Validation de l'ajout 
          this.newReservation = { utilisateur_id: null, jeux_id: null, reservation: null}; // Remise à vide des champs du formulaire
        },
        error => {
          console.error('Erreur lors de la création de la réservation', error); // Erreur si l'ajout ne fonctionne pas, peut être dû à plusieurs facteurs 
        }
      );
    }
  }
}

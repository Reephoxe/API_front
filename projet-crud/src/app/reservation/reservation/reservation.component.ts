import { NgForOf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Reservation } from '../../models/reservation.model';
import { ReservationService } from '../../services/ReservationService';

@Component({
  selector: 'app-Reservation',
  templateUrl: './reservation.component.html',
  standalone: true,
  imports: [NgForOf, MatTableModule, MatPaginatorModule],
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  displayedColumns: string[] = ['reservation', 'utilisateur_id', 'jeux_id'];

  reservation!: MatTableDataSource<Reservation>;
  @ViewChild(MatPaginator) paginator! : MatPaginator;

  constructor(private readonly reservationService: ReservationService){
  }

  ngOnInit(): void {
    this.reservationService.getAll().subscribe(value => {
      this.reservation = new MatTableDataSource<Reservation>(value);
      this.reservation.paginator = this.paginator;
    })
  }
}

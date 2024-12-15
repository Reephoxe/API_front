import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { catchError } from "rxjs";
import { Observable } from 'rxjs';
import { Reservation } from "../models/reservation.model";
import { FormsModule } from '@angular/forms';


@Injectable({
    providedIn: 'root'
})

export class ReservationService {
    API_URL: string = "http://localhost:8080";
    API_ENTITY_NAME: string = "reservation";

    constructor(private readonly http: HttpClient) { }

    public createReservation(reservation: Reservation): Observable<Reservation> {
        return this.http.post<Reservation>(`${this.API_URL}/${this.API_ENTITY_NAME}`, reservation)
            .pipe(catchError(error => {
                console.error('Erreur lors de l\'ajout de la réservation : ', error);
                alert('Une erreur est survenu lors de la création d\'une réservation');
                throw error;
            })
            );
    }


    public getAll(): Observable<Reservation[]> {
        return this.http.get<Reservation[]>(`${this.API_URL}/${this.API_ENTITY_NAME}`)
            .pipe(catchError(error => {
                console.error('Erreur lors de la récupération des réservations : ', error);
                alert('Une erreur est survenu lors de la récupération des réservations');
                throw error;
            })
            );
    }

    public getById(id: number): Observable<Reservation> {
        return this.http.get<Reservation>(`${this.API_URL}/${this.API_ENTITY_NAME}/${id}`)
            .pipe(catchError(error => {
                console.error('Erreur lors de la récupération de la réservation : ', error);
                alert('Une erreur est survenu lors de la récupération de la réservation');
                throw error;
            })
            );
    }

    public updateReservation(id: number, reservation: Reservation): Observable<Reservation> {
        return this.http.put<Reservation>(`${this.API_URL}/${this.API_ENTITY_NAME}/${id}`, reservation)
            .pipe(catchError(error => {
                console.error('Erreur lors de la modification de la réservation : ', error);
                alert('Une erreur est survenu lors de la modification de la réservation');
                throw error;
            })
            );
    }

    public deleteReservation(id: number): Observable<Reservation> {
        return this.http.delete<Reservation>(`${this.API_URL}/${this.API_ENTITY_NAME}/${id}`)
            .pipe(catchError(error => {
                console.error('Erreur lors de la suppression de la réservation : ', error);
                alert('Une erreur est survenu lors de la suppression de la réservation');
                throw error;
            })
            );
    }

    
}
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { catchError } from "rxjs";
import { Observable } from 'rxjs';
import { Reservation } from "../models/reservation.model";
import { FormsModule } from '@angular/forms';


@Injectable({ // Marquage de l'injection de dépendances pour la classe 
    providedIn: 'root' // Indiquation de la localisation où les données doivent être récupérées
})

export class ReservationService { // Classe de "manipulation" des données liées aux réservations 
    API_URL: string = "http://localhost:8080"; // URL liée au service 
    API_ENTITY_NAME: string = "reservation"; // Nom de l'entité liée au service 

    constructor(private readonly http: HttpClient) { } //Constructeur par défaut 

    public createReservation(reservation: Reservation): Observable<Reservation> { // Fonction de création d'une réservation
        return this.http.post<Reservation>(`${this.API_URL}/${this.API_ENTITY_NAME}`, reservation) // Renvoie le résultat de la requette http
            .pipe(catchError(error => {
                console.error('Erreur lors de l\'ajout de la réservation : ', error);       // En cas de problème lors de l'envoie de la réservation vers le back (ou de la création de la requette)
                alert('Une erreur est survenu lors de la création d\'une réservation');     //
                throw error;
            })
            );
    }


    public getAll(): Observable<Reservation[]> { // Récupération de l'intégralité de la table Réservation 
        return this.http.get<Reservation[]>(`${this.API_URL}/${this.API_ENTITY_NAME}`) // Retour de la requette http
            .pipe(catchError(error => {
                console.error('Erreur lors de la récupération des réservations : ', error);        // En cas de problème lors de la lecture de la table  
                alert('Une erreur est survenu lors de la récupération des réservations');          //
                throw error;
            })
            );
    }

    public getById(id: number): Observable<Reservation> { // Récupération d'une réservation selon l'identifiant de cette dernière
        return this.http.get<Reservation>(`${this.API_URL}/${this.API_ENTITY_NAME}/${id}`) // Retour de la requette http
            .pipe(catchError(error => {
                console.error('Erreur lors de la récupération de la réservation : ', error);    // En cas de problème lors de la lecture de la table  
                alert('Une erreur est survenu lors de la récupération de la réservation');      //
                throw error;
            })
            );
    }

    public updateReservation(id: number, reservation: Reservation): Observable<Reservation> { // Modification totale (put) d'une réservaiton selon son identifiant 
        return this.http.put<Reservation>(`${this.API_URL}/${this.API_ENTITY_NAME}/${id}`, reservation) // Retour de la requette http
            .pipe(catchError(error => {
                console.error('Erreur lors de la modification de la réservation : ', error);    // En cas de problème lors de la lecture ou de l'écriture sur la table
                alert('Une erreur est survenu lors de la modification de la réservation');      //
                throw error;
            })
            );
    }

    public deleteReservation(id: number): Observable<Reservation> { // Suppression de la réservation selon son identifiant 
        return this.http.delete<Reservation>(`${this.API_URL}/${this.API_ENTITY_NAME}/${id}`) // Retour de la requête http
            .pipe(catchError(error => {
                console.error('Erreur lors de la suppression de la réservation : ', error);     // En cas de problème lors de la lecture ou de la suppression dans la table
                alert('Une erreur est survenu lors de la suppression de la réservation');       //
                throw error;
            })
            );
    }

    
}
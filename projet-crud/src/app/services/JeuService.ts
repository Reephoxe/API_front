import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Jeu } from "../models/jeu.model";



@Injectable({ // Marquage de l'injection de dépendances pour la classe 
    providedIn: 'root' // Indiquation de la localisation où les données doivent être récupérées
})
export class JeuService { // Classe de "manipulation" des données liées aux aires de jeux 

    API_URL: string = "http://localhost:8080/jeux"; // redondant -> peut créer une constante du début du chemin

    constructor(private http: HttpClient) { } // Constructeur par défaut 

    getList(): Observable<Jeu[]> { // Récupération de l'intégralité de la table jeu
        return this.http.get<Jeu[]>(this.API_URL); // Retourne sous forme de liste de jeu
    }
    getById(id : number): Observable<Jeu> { // Récupération d'une aire de jeu selon son identifiant 
        return this.http.get<Jeu>(`${this.API_URL}/${id}`); // Retourne un objet Jeu
    }
    createJeu(Jeu: Jeu): Observable<Jeu> { // Création d'une nouvelle aire de jeu dans la table jeu
        return this.http.post<Jeu>(this.API_URL, Jeu); // Retourne l'aire en question 
    }
    deleteJeu(id : number): Observable<void>{ // Supprime une aire de jeu dans la table jeu
        return this.http.delete<void>(`${this.API_URL}/${id}`); // Ne retourne que la réponse de la requette http dans la console web
    }
    updadeJeu(id : number, jeu : Jeu): Observable<Jeu>{ // Mis à jour totale (put) d'un élément d'une aire de jeu dans la table jeu 
        return this.http.put<Jeu>(`${this.API_URL}/${id}`, jeu); // Retourne l'aire avec ses nouvelles caractéristiques  
    }

}
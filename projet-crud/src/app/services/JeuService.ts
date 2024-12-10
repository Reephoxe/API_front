import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Jeu } from "../models/jeu.model";



@Injectable({
    providedIn: 'root'
})
export class JeuService {

    API_URL: string = "http://localhost:8080/jeux"; // redondant -> peut créer une constante du début du chemin

    constructor(private http: HttpClient) { }

    getList(): Observable<Jeu[]> {
        return this.http.get<Jeu[]>(this.API_URL);
    }
    getById(id : number): Observable<Jeu> {
        return this.http.get<Jeu>(`${this.API_URL}/${id}`);
    }
    createJeu(Jeu: Jeu): Observable<Jeu> {
        return this.http.post<Jeu>(this.API_URL, Jeu);
    }
    deleteJeu(id : number): Observable<void>{
        return this.http.delete<void>(`${this.API_URL}/${id}`);
    }
    updadeJeu(id : number, jeu : Jeu): Observable<Jeu>{
        return this.http.put<Jeu>(`${this.API_URL}/${id}`, jeu);
    }

}
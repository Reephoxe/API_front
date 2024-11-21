import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Utilisateur} from '../models/utilisateur.model';


@Injectable({
    providedIn: 'root'
  })
export class UtilisateurService {

    API_URL : string = "http://localhost:8080/api"; // A changer en fonction du back

    constructor(private http: HttpClient){}

	getList(): Observable<Utilisateur[]> {
		return this.http.get<Utilisateur[]>(this.API_URL);
    } 
    getById(id : number): Observable<Utilisateur>{
        return this.http.get<Utilisateur>('&{this.apiUrl}/${id}');
    }   
    createUtilisateur(utilisateur:Utilisateur):Observable<Utilisateur>{
        return this.http.post<Utilisateur>(this.API_URL, utilisateur);
    }
    //Penser à ajouter l'update et delete dans un 2 eme temps
}
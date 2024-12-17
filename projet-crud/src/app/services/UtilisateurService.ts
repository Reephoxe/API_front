import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Utilisateur} from '../models/utilisateur.model';


@Injectable({ // Marquage de l'injection de dépendances pour la classe 
    providedIn: 'root'  // Indiquation de la localisation où les données doivent être récupérées
  })
export class UtilisateurService { // Classe de "manipulation" des données liées aux utilisateurs

    API_URL : string = "http://localhost:8080/api"; // URL liée au service 

    constructor(private http: HttpClient){} // Constructeur par défaut 

	getList(): Observable<Utilisateur[]> { // Récupération de l'intégralité de la table utilisateurs
		return this.http.get<Utilisateur[]>(this.API_URL); // Retourne sous forme de liste de Utilisateur
    } 
    getById(id : number): Observable<Utilisateur>{ // Récupération d'un utilisateur selon son identifiant 
        return this.http.get<Utilisateur>('&{this.apiUrl}/${id}'); // Retourne un objet utilisateur
    }   
    createUtilisateur(utilisateur:Utilisateur):Observable<Utilisateur>{ // Création d'un nouvel utilisateur dans la table utilisateur
        return this.http.post<Utilisateur>(this.API_URL, utilisateur); // Retourne l'utilisateur en question 
    }
    //Penser à ajouter l'update et delete dans un 2 eme temps
}
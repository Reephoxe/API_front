import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../models/utilisateur.model';
import { UtilisateurService } from '../../services/UtilisateurService';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  utilisateurs: Utilisateur[] = [];

  constructor(private utilsateurService: UtilisateurService) { }

  ngOnInit(): void {
    
    this.getUtilisateurs();
  }

  getUtilisateurs(): void {
    this.utilsateurService.getList().subscribe(
      utilisateurs => this.utilisateurs = utilisateurs
    );
  }
}

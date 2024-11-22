import { NgForOf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Utilisateur } from '../../models/utilisateur.model';
import { UtilisateurService } from '../../services/UtilisateurService';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  standalone: true,
  imports: [
    NgForOf,
    MatTableModule,
    MatPaginatorModule
  ],
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent {

  displayColumns : string[] = ['nom'];

  utilisateurs!: MatTableDataSource<Utilisateur>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private readonly utilsateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.utilsateurService.getList().subscribe(value =>{
      this.utilisateurs = new MatTableDataSource<Utilisateur>(value);
      this.utilisateurs.paginator = this.paginator;
    });
  }
  

}

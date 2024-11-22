import { NgForOf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Jeu } from '../../models/jeu.model';
import { JeuService } from '../../services/JeuService';

@Component({
  selector: 'app-Jeu',
  templateUrl: './jeu.component.html',
  standalone: true,
  imports: [NgForOf, MatTableModule, MatPaginatorModule],
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit {
  displayedColumns: string[] = ['nom'];

  jeux!: MatTableDataSource<Jeu>;
  @ViewChild(MatPaginator) paginator! : MatPaginator;

  constructor(private readonly jeuService: JeuService){
  }

  ngOnInit(): void {
    this.jeuService.getList().subscribe(value => {
      this.jeux = new MatTableDataSource<Jeu>(value);
      this.jeux.paginator = this.paginator;
    })
  }
}

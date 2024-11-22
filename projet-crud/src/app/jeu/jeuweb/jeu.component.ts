import { NgForOf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Jeu } from '../../models/jeu.model';
import { JeuService } from '../../services/JeuService';

@Component({
  selector: 'app-Jeu',
  templateUrl: './Jeu.component.html',
  standalone: true,
  imports: [NgForOf, MatTableModule, MatPaginatorModule],
  styleUrls: ['./Jeu.component.css']
})
export class JeuComponent implements OnInit {
  displayedColumns: string[] = ['nom'];

  dataSource!: MatTableDataSource<Jeu>;
  @ViewChild(MatPaginator) paginator! : MatPaginator;

  constructor(private readonly jeuService: JeuService){
  }

  ngOnInit(): void {
    this.jeuService.getList().subscribe(value => {
      this.dataSource = new MatTableDataSource<Jeu>(value);
      this.dataSource.paginator = this.paginator;
    })
  }
}

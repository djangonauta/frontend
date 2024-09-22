import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { environment } from '../../../environments/environment';
import { Result, Usuario } from '../../types/types';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

  usuarios: Result<Usuario> = {
    count: 0,
    has_next: null,
    has_previous: null,
    next_page_number: null,
    num_pages: 0,
    page: 0,
    page_range: [],
    per_page: 0,
    previous_page_number: null,
    results: [],
  }
  colunas = ['id', 'username', 'nome_completo']

  constructor (private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Result<Usuario>>(`${environment.apiUrl}usuarios/`).subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios
      }
    })
  }
}

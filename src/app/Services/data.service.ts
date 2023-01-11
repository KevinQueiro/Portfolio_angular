import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsuarioI } from '../models/usuarios.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAllUsuarios(): Observable<UsuarioI[]> {
    return this.http.get<UsuarioI[]>('http://localhost:8080/usuarios/all');
  }
}

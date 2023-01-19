import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsuarioI } from '../models/usuarios.interface';
import { LoginI } from '../models/login.interface';
import { TecnologiaI } from '../models/tecnologias.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAllUsuarios(): Observable<UsuarioI[]> {
    return this.http.get<UsuarioI[]>('http://localhost:8080/usuarios/all');
  }

  login(log: LoginI): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8080/login', log);
  }

  getAllTecno(): Observable<TecnologiaI[]> {
    return this.http.get<TecnologiaI[]>('http://localhost:8080/tecnologias/all');
  }

}

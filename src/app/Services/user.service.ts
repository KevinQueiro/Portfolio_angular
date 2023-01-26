import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginI } from '../models/login.interface';
import { UsuarioI } from '../models/usuarios.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getAllUsuarios(): Observable<UsuarioI[]> {
    console.log("getAllUsuarios");
    return this.http.get<UsuarioI[]>(
      environment.baseUrl + '/usuarios/all'
      );
  }

  login(log: LoginI): Observable<boolean> {
    console.log("login");
    return this.http.post<boolean>(
      environment.baseUrl + '/login', log
    );
  }

  changeUserData(newUserData: UsuarioI, userId: String | null): Observable<UsuarioI> {
    console.log("changeUserData");
    return this.http.put<UsuarioI>(
      environment.baseUrl + `/usuarios/change/${userId}`,
      newUserData
    )
  }

  getUserById(userId: String | null): Observable<UsuarioI> {
    return this.http.get<UsuarioI>(
      environment.baseUrl + `/usuarios/one/${userId}`
    )
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectosI } from '../models/proyectos.interface';

@Injectable({
  providedIn: 'root',
})
export class ProService {
  constructor(private http: HttpClient) {}

  getProById(proId: String | null): Observable<ProyectosI> {
    return this.http.get<ProyectosI>(
      `http://localhost:8080/proyectos/one/${proId}`
    );
  }

  newPro(newPro: ProyectosI, userId: String | null): Observable<ProyectosI> {
    return this.http.post<ProyectosI>(
      `http://localhost:8080/proyectos/save?user=${userId}`,
      newPro
    );
  }

  deletePro(proId: number | null | undefined): Observable<boolean> {
    return this.http.delete<boolean>(
      `http://localhost:8080/proyectos/delete/${proId}`
    );
  }

  changePro(proId: string | null, newPro: ProyectosI): Observable<ProyectosI> {
    return this.http.put<ProyectosI>(
      `http://localhost:8080/proyectos/change?exp=${proId}`,
      newPro
    );
  }

  addTecnoToPro(
    proId: number | undefined,
    unbind: boolean,
    tecnoId: number | undefined,
    newPro?: ProyectosI
  ): Observable<ProyectosI> {
    return this.http.put<ProyectosI>(
      `http://localhost:8080/proyectos/change?pro=${proId}&tecno=${tecnoId}&unbind=${unbind}`,
      newPro
    );
  }
}

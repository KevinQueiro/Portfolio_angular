import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectosI } from '../models/proyectos.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProService {
  constructor(private http: HttpClient) {}

  getProById(proId: String | null): Observable<ProyectosI> {
    return this.http.get<ProyectosI>(
      environment.baseUrl + `/proyectos/one/${proId}`
    );
  }

  newPro(newPro: ProyectosI, userId: String | null): Observable<ProyectosI> {
    return this.http.post<ProyectosI>(
      environment.baseUrl + `/proyectos/save?user=${userId}`,
      newPro
    );
  }

  deletePro(proId: number | null | undefined): Observable<boolean> {
    return this.http.delete<boolean>(
      environment.baseUrl + `/proyectos/delete/${proId}`
    );
  }

  changePro(proId: string | null, newPro: ProyectosI): Observable<ProyectosI> {
    return this.http.put<ProyectosI>(
      environment.baseUrl + `/proyectos/change?exp=${proId}`,
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
      environment.baseUrl + `/proyectos/change?pro=${proId}&tecno=${tecnoId}&unbind=${unbind}`,
      newPro
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TecnologiaI } from '../models/tecnologias.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TecnoService {
  constructor(private http: HttpClient) {}

  getAllTecno(): Observable<TecnologiaI[]> {
    return this.http.get<TecnologiaI[]>(
      environment.baseUrl + '/tecnologias/all'
    );
  }

  newTecno(newTecno: TecnologiaI): Observable<TecnologiaI> {
    return this.http.post<TecnologiaI>(
      environment.baseUrl + '/tecnologias/save',
      newTecno
    );
  }

  getTecnoById(tecnoId: String | null): Observable<TecnologiaI> {
    return this.http.get<TecnologiaI>(
      environment.baseUrl + `/tecnologias/one/${tecnoId}`
    )
  }

  changeTecno(newTecno: TecnologiaI, tecnoId: String | null): Observable<TecnologiaI> {
    return this.http.put<TecnologiaI>(
      environment.baseUrl + `/tecnologias/change/${tecnoId}`,
      newTecno
    );
  }

  deleteTecno(tecnoId: number | undefined): Observable<boolean> {    
    return this.http.delete<boolean>(
      environment.baseUrl + `/tecnologias/delete/${tecnoId}`
    );
  }

}

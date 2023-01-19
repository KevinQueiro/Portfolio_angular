import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TecnologiaI } from '../models/tecnologias.interface';

@Injectable({
  providedIn: 'root',
})
export class TecnoService {
  constructor(private http: HttpClient) {}

  getAllTecno(): Observable<TecnologiaI[]> {
    return this.http.get<TecnologiaI[]>(
      'http://localhost:8080/tecnologias/all'
    );
  }

  newTecno(newTecno: TecnologiaI): Observable<TecnologiaI> {
    return this.http.post<TecnologiaI>(
      'http://localhost:8080/tecnologias/save',
      newTecno
    );
  }

  getTecnoById(tecnoId: String | null): Observable<TecnologiaI> {
    return this.http.get<TecnologiaI>(
      `http://localhost:8080/tecnologias/one/${tecnoId}`
    )
  }

  changeTecno(newTecno: TecnologiaI, tecnoId: String | null): Observable<TecnologiaI> {
    return this.http.put<TecnologiaI>(
      `http://localhost:8080/tecnologias/change/${tecnoId}`,
      newTecno
    );
  }

  deleteTecno(tecnoId: number | undefined): Observable<boolean> {    
    return this.http.delete<boolean>(
      `http://localhost:8080/tecnologias/delete/${tecnoId}`
    );
  }

}

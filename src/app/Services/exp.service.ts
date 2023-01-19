import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciasI } from '../models/experiencias.interface';

@Injectable({
  providedIn: 'root'
})
export class ExpService {

  constructor(private http: HttpClient) { }


  getExpById(expId: String | null): Observable<ExperienciasI> {
    return this.http.get<ExperienciasI>(
      `http://localhost:8080/exp/one/${expId}`
    );
  }

  newExp(newExp: ExperienciasI, userId: String | null): Observable<ExperienciasI> {
    return this.http.post<ExperienciasI>(
      `http://localhost:8080/exp/save?user=${userId}`,
      newExp
    );
  }

  deleteExp(expId: number | null | undefined): Observable<boolean> {
    return this.http.delete<boolean>(
      `http://localhost:8080/exp/delete/${expId}`
    );
  }

  changeExp(expId: string | null, newExp: ExperienciasI): Observable<ExperienciasI> {
    console.log(newExp);
    return this.http.put<ExperienciasI>(
      `http://localhost:8080/exp/change?exp=${expId}`,
      newExp
    );
  }

  addTecnoToExp(expId: number | undefined, unbind:boolean, tecnoId:number | undefined,newExp?: ExperienciasI): Observable<ExperienciasI> {
    console.log(newExp);
    return this.http.put<ExperienciasI>(
      `http://localhost:8080/exp/change?exp=${expId}&tecno=${tecnoId}&unbind=${unbind}`,
      newExp
    );
  }


}

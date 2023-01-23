import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciasI } from '../models/experiencias.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpService {

  constructor(private http: HttpClient) { }


  getExpById(expId: String | null): Observable<ExperienciasI> {
    return this.http.get<ExperienciasI>(
      environment.baseUrl + `/exp/one/${expId}`
    );
  }

  newExp(newExp: ExperienciasI, userId: String | null): Observable<ExperienciasI> {
    return this.http.post<ExperienciasI>(
      environment.baseUrl + `/exp/save?user=${userId}`,
      newExp
    );
  }

  deleteExp(expId: number | null | undefined): Observable<boolean> {
    return this.http.delete<boolean>(
      environment.baseUrl + `/exp/delete/${expId}`
    );
  }

  changeExp(expId: string | null, newExp: ExperienciasI): Observable<ExperienciasI> {
    return this.http.put<ExperienciasI>(
      environment.baseUrl + `/exp/change?exp=${expId}`,
      newExp
    );
  }

  addTecnoToExp(expId: number | undefined, unbind:boolean, tecnoId:number | undefined,newExp?: ExperienciasI): Observable<ExperienciasI> {
    return this.http.put<ExperienciasI>(
      environment.baseUrl + `/exp/change?exp=${expId}&tecno=${tecnoId}&unbind=${unbind}`,
      newExp
    );
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EducacionesI } from '../models/educaciones.interface';
import { ExperienciasI } from '../models/experiencias.interface';

@Injectable({
  providedIn: 'root',
})
export class EduService {
  constructor(private http: HttpClient) {}

  getEduById(eduId: String | null): Observable<EducacionesI> {
    return this.http.get<EducacionesI>(
      `http://localhost:8080/educacion/one/${eduId}`
    );
  }

  newEdu(
    newEdu: EducacionesI,
    userId: String | null
  ): Observable<EducacionesI> {
    return this.http.post<EducacionesI>(
      `http://localhost:8080/educacion/save?user=${userId}`,
      newEdu
    );
  }

  deleteEdu(eduId: number | null | undefined): Observable<boolean> {
    return this.http.delete<boolean>(
      `http://localhost:8080/educacion/delete/${eduId}`
    );
  }

  changeEdu(
    eduId: string | null,
    newEdu: EducacionesI
  ): Observable<EducacionesI> {
    return this.http.put<EducacionesI>(
      `http://localhost:8080/educacion/change/${eduId}`,
      newEdu
    );
  }
}

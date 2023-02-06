import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EducacionesI } from '../models/educaciones.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EduService {
  constructor(private http: HttpClient) {}

  getEduById(eduId: String | null): Observable<EducacionesI> {
    return this.http.get<EducacionesI>(
      environment.baseUrl + `/educacion/one/${eduId}`
    );
  }

  newEdu(
    newEdu: EducacionesI,
    userId: String | null
  ): Observable<EducacionesI> {
    return this.http.post<EducacionesI>(
      environment.baseUrl + `/educacion/save?user=${userId}`,
      newEdu
    );
  }

  deleteEdu(eduId: number | null | undefined): Observable<boolean> {
    return this.http.delete<boolean>(
      environment.baseUrl + `/educacion/delete/${eduId}`
    );
  }

  changeEdu(
    eduId: string | null,
    newEdu: EducacionesI
  ): Observable<EducacionesI> {
    return this.http.put<EducacionesI>(
      environment.baseUrl + `/educacion/change/${eduId}`,
      newEdu
    );
  }
}

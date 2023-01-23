import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillsI } from '../models/skills.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  constructor(private http: HttpClient) {}

  getSkillById(skillId: String | null): Observable<SkillsI> {
    return this.http.get<SkillsI>(
      environment.baseUrl + `/skills/one/${skillId}`
    );
  }

  changeSkill(newSkill: SkillsI, skillId: String | null): Observable<SkillsI> {
    return this.http.put<SkillsI>(
      environment.baseUrl + `/skills/change/${skillId}`,
      newSkill
    );
  }

  newSkill(newSkill: SkillsI, userId: String | null): Observable<SkillsI> {
    return this.http.post<SkillsI>(
      environment.baseUrl + `/skills/save/${userId}`,
      newSkill
    );
  }

  ///delete/{id}
  deleteSkill(skillId: number | null | undefined): Observable<boolean> {
    return this.http.delete<boolean>(
      environment.baseUrl + `/skills/delete/${skillId}`
    );
  }
}

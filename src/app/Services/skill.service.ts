import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillsI } from '../models/skills.interface';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  constructor(private http: HttpClient) {}

  getSkillById(skillId: String | null): Observable<SkillsI> {
    return this.http.get<SkillsI>(
      `http://localhost:8080/skills/one/${skillId}`
    );
  }

  changeSkill(newSkill: SkillsI, skillId: String | null): Observable<SkillsI> {
    return this.http.put<SkillsI>(
      `http://localhost:8080/skills/change/${skillId}`,
      newSkill
    );
  }

  newSkill(newSkill: SkillsI, userId: String | null): Observable<SkillsI> {
    return this.http.post<SkillsI>(
      `http://localhost:8080/skills/save/${userId}`,
      newSkill
    );
  }

  ///delete/{id}
  deleteSkill(skillId: number | null | undefined): Observable<boolean> {
    return this.http.delete<boolean>(
      `http://localhost:8080/skills/delete/${skillId}`
    );
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsuarioI } from '../models/usuarios.interface';
import { LoginI } from '../models/login.interface';
import { SkillsI } from '../models/skills.interface';
import { TecnologiaI } from '../models/tecnologias.interface';
import { ExperienciasI } from '../models/experiencias.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAllUsuarios(): Observable<UsuarioI[]> {
    return this.http.get<UsuarioI[]>('http://localhost:8080/usuarios/all');
  }

  login(log: LoginI): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8080/login', log);
  }

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

  getAllTecno(): Observable<TecnologiaI[]> {
    return this.http.get<TecnologiaI[]>('http://localhost:8080/tecnologias/all');
  }

  getExpById(expId: String | null): Observable<ExperienciasI> {
    return this.http.get<ExperienciasI>(
      `http://localhost:8080/exp/one/${expId}`
    );
  }

  newExp(newExp: ExperienciasI, userId: String | null): Observable<SkillsI> {
    return this.http.post<SkillsI>(
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

  addTecno(expId: number | undefined, unbind:boolean, tecnoId:number | undefined,newExp?: ExperienciasI): Observable<ExperienciasI> {
    console.log(newExp);
    return this.http.put<ExperienciasI>(
      `http://localhost:8080/exp/change?exp=${expId}&tecno=${tecnoId}&unbind=${unbind}`,
      newExp
    );
  }

}

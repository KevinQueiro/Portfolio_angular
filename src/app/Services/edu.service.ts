import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciasI } from '../models/experiencias.interface';

@Injectable({
  providedIn: 'root',
})
export class EduService {
  constructor(private http: HttpClient) {}
}

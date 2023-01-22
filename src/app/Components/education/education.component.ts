import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioI } from 'src/app/models/usuarios.interface';
import { EduService } from 'src/app/Services/edu.service';
import { DataService } from 'src/app/Services/logIn.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  usuario!: UsuarioI[];
  sesion: boolean | undefined;

  constructor(
    private dataSvc: DataService,
    private eduSvc: EduService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataSvc.getAllUsuarios().subscribe((data) => (this.usuario = data));
    if(sessionStorage.getItem('sesion') == 'true'){
      this.sesion = true;
    }
  }

  onDelete(idEdu: number | undefined){
    console.log(idEdu);
    
  }

}

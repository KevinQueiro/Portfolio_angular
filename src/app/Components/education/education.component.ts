import { Component, OnInit } from '@angular/core';
import { UsuarioI } from 'src/app/models/usuarios.interface';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  usuario!: UsuarioI[];

  constructor(private dataSvc:DataService) { }

  ngOnInit(){
    this.dataSvc.getAllUsuarios().subscribe((data) => (this.usuario = data))
  }

}

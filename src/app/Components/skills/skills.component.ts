import { Component, OnInit } from '@angular/core';
import { UsuarioI } from 'src/app/models/usuarios.interface';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  usuario!: UsuarioI[];

  constructor(private dataSvc: DataService) { }

  ngOnInit(){
    this.dataSvc.getAllUsuarios().subscribe((data) => (this.usuario = data));
  }

}

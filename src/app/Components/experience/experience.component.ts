import { Component, OnInit } from '@angular/core';
import { UsuarioI } from 'src/app/models/usuarios.interface';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  usuario!: UsuarioI[];

  constructor(private dataSvc:DataService) { }

  async ngOnInit() {
    this.dataSvc.getAllUsuarios().subscribe((data) => (this.usuario = data))
  }

}

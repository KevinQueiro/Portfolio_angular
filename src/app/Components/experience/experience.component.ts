import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioI } from 'src/app/models/usuarios.interface';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  usuario!: UsuarioI[];
  sesion: boolean | undefined;

  constructor(private dataSvc:DataService, private router:Router) { }

  async ngOnInit() {
    this.dataSvc.getAllUsuarios().subscribe((data) => (this.usuario = data))
    if (sessionStorage.getItem('sesion') == 'true') {
      this.sesion = true;
    }
  }

  onDelete(idExp: number | undefined) {
    console.log(idExp);
    this.dataSvc.deleteExp(idExp).subscribe((data) => console.log(data));
    this.router.navigate(['/Exp']).then(() => window.location.reload());
  }

}

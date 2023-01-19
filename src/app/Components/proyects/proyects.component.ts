import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioI } from 'src/app/models/usuarios.interface';
import { DataService } from 'src/app/Services/logIn.service';
import { ProService } from 'src/app/Services/pro.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
})
export class ProyectsComponent implements OnInit {
  usuario!: UsuarioI[];
  sesion: boolean | undefined;

  constructor(
    private dataSvc: DataService,
    private proSvc: ProService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.dataSvc.getAllUsuarios().subscribe((data) => (this.usuario = data));
    if (sessionStorage.getItem('sesion') == 'true') {
      this.sesion = true;
    }
  }

  onDelete(idPro: number | undefined) {
    this.proSvc.deletePro(idPro).subscribe((data) => console.log(data))
    this.router.navigate(['/Projects']).then(()=>window.location.reload())
  }
}

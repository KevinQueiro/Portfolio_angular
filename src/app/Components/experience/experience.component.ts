import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioI } from 'src/app/models/usuarios.interface';
import { ExpService } from 'src/app/Services/exp.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  usuario!: UsuarioI[];
  sesion: boolean | undefined;

  constructor(
    private userSvc: UserService,
    private expSvc: ExpService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.userSvc.getAllUsuarios().subscribe((data) => (this.usuario = data));
    if (sessionStorage.getItem('sesion') == 'true') {
      this.sesion = true;
    }
  }

  onDelete(idExp: number | undefined) {
    this.expSvc.deleteExp(idExp).subscribe((data) => null);
    this.router.navigate(['/Exp']).then(() => window.location.reload());
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioI } from 'src/app/models/usuarios.interface';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {

  usuario!: UsuarioI[];
  sesion: boolean | undefined;

  constructor(
    private userSvc: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userSvc.getAllUsuarios().subscribe((data) => (this.usuario = data));
    if (sessionStorage.getItem('sesion') == 'true') {
      this.sesion = true;
    }
  }
}

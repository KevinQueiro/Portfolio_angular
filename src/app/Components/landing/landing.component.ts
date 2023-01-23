import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioI } from 'src/app/models/usuarios.interface';
import { UserService } from 'src/app/Services/user.service';
import { DataService } from '../../Services/logIn.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {

  usuario!: UsuarioI[];
  sesion: boolean | undefined;

  constructor(
    private dataSvc: DataService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataSvc
      .getAllUsuarios()
      .subscribe((data) => (this.usuario = data));
      if (sessionStorage.getItem('session') == 'true'){
        this.sesion = true
      }
  }
}

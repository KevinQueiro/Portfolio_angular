import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioI } from 'src/app/models/usuarios.interface';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  idUser: string | null = '';
  user: UsuarioI = {
    nombre: '',
    apellido: '',
    titulo: '',
    about: '',
    foto: '',
  };
  checkoutForm = this.formBuilder.group({
    nombre: '',
    apellido: '',
    titulo: '',
    about: '',
    foto: '',
  });
  sesion: boolean | undefined;
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userSvc: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('sesion') == 'true') {
      this.sesion = true;
    } else {
      this.router.navigate(['/Welcome'])
    }
    this.getUser();
  }

  getUser() {
    this.route.paramMap.subscribe(
      (params) => (this.idUser = params.get('userId'))
    );
    this.userSvc
      .getUserById(this.idUser)
      .subscribe((data) => (this.user = data));
  }

  changeUser() {
    let newUserData = {
      nombre: this.checkoutForm.value.nombre || this.user.nombre,
      apellido: this.checkoutForm.value.apellido || this.user.apellido,
      titulo: this.checkoutForm.value.titulo || this.user.titulo,
      about: this.checkoutForm.value.about || this.user.about,
      foto: this.checkoutForm.value.foto || this.user.foto,
    };
    this.userSvc.changeUserData(newUserData, this.idUser).subscribe((data) => this.router.navigate(['/Welcome']))
  }
}

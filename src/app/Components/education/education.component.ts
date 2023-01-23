import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioI } from 'src/app/models/usuarios.interface';
import { EduService } from 'src/app/Services/edu.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  usuario!: UsuarioI[];
  sesion: boolean | undefined;

  constructor(
    private userSvc: UserService,
    private eduSvc: EduService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userSvc.getAllUsuarios().subscribe((data) => (this.usuario = data));
    if(sessionStorage.getItem('sesion') == 'true'){
      this.sesion = true;
    }
  }

  onDelete(idEdu: number | undefined){
    this.eduSvc.deleteEdu(idEdu).subscribe((data) => null);
    this.router.navigate(['/Education']).then(() => window.location.reload());
  }

}

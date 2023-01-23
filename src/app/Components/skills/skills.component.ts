import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioI } from 'src/app/models/usuarios.interface';
import { SkillService } from 'src/app/Services/skill.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  usuario!: UsuarioI[];
  sesion: boolean | undefined;

  constructor(
    private userSvc: UserService,
    private skillSvc: SkillService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userSvc.getAllUsuarios().subscribe((data) => (this.usuario = data));
    if (sessionStorage.getItem('sesion') == 'true') {
      this.sesion = true;
    }
  }

  onDelete(idSkill: number | undefined) {
    this.skillSvc.deleteSkill(idSkill).subscribe((data) => null);
    this.router.navigate(['/Skills']).then(() => window.location.reload());
  }
}

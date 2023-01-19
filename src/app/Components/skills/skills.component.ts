import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioI } from 'src/app/models/usuarios.interface';
import { DataService } from 'src/app/Services/logIn.service';
import { SkillService } from 'src/app/Services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  usuario!: UsuarioI[];
  sesion: boolean | undefined;

  constructor(
    private dataSvc: DataService,
    private skillSvc: SkillService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataSvc.getAllUsuarios().subscribe((data) => (this.usuario = data));
    if (sessionStorage.getItem('sesion') == 'true') {
      this.sesion = true;
      console.log(this.sesion);
    }
  }

  onDelete(idSkill: number | undefined) {
    console.log(idSkill);
    this.skillSvc.deleteSkill(idSkill).subscribe((data) => console.log(data));
    this.router.navigate(['/Skills']).then(() => window.location.reload());
  }
}

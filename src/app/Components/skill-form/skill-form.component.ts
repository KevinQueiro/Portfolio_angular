import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillsI } from 'src/app/models/skills.interface';
import { FormBuilder } from '@angular/forms';
import { SkillService } from 'src/app/Services/skill.service';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css'],
})
export class SkillFormComponent implements OnInit {
  idUser: string | null = '';
  idSkill: string | null = '';
  skill: SkillsI = { nombre: '', percen: '' };
  checkoutForm = this.formBuilder.group({ nombre: '', percen: '' });
  actualUrl = window.location.href;
  sesion: boolean | undefined;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private skillSvc: SkillService,
    private route: ActivatedRoute
  ) {
    this.router = router;
  }

  ngOnInit(): void {
    this.actualUrl.includes('add') ? null : this.getSkill();
    if (sessionStorage.getItem('sesion') == 'true') {
      this.sesion = true;
    } else {
      this.router.navigate(['/Skills']);
    }
  }

  getSkill() {
    this.route.paramMap.subscribe(
      (params) => (this.idSkill = params.get('skillId'))
    );
    this.skillSvc
      .getSkillById(this.idSkill)
      .subscribe((data) => (this.skill = data));
  }

  addSkill() {
    this.route.paramMap.subscribe(
      (params) => (this.idUser = params.get('userId'))
    );
    let newSkill = {
      nombre: this.checkoutForm.value.nombre || '',
      percen: `${this.checkoutForm.value.percen}%` || '',
    };
    this.skillSvc.newSkill(newSkill, this.idUser).subscribe((data) => {
      this.router.navigate(['/Skills']);
    });
  }

  changeSkill() {
    let newSkill = {
      nombre: this.checkoutForm.value.nombre || this.skill.nombre,
      percen: this.checkoutForm.value.percen || this.skill.percen,
    };
    this.skillSvc.changeSkill(newSkill, this.idSkill).subscribe((data) => {
      this.router.navigate(['/Skills']);
    });
  }

  onSubmit() {
    this.actualUrl.includes('add') ? this.addSkill() : this.changeSkill();
  }
}

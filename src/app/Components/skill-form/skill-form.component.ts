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
  skill: SkillsI = { id: 0, nombre: '', percen: '' };
  checkoutForm = this.formBuilder.group({ nombre: '', percen: '' });
  actualUrl = window.location.href;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private skillSvc: SkillService,
    private route: ActivatedRoute
  ) {
    this.router = router;
  }

  ngOnInit(): void {
    console.log(this.actualUrl.includes('add'));

    this.actualUrl.includes('add') ? null : this.getSkill();
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
    console.log('addSkill');

    this.route.paramMap.subscribe(
      (params) => (this.idUser = params.get('userId'))
    );
    let newSkill = {
      nombre: this.checkoutForm.value.nombre || '',
      percen: `${this.checkoutForm.value.percen}%` || ''
    };
    this.skillSvc.newSkill(newSkill, this.idUser).subscribe((data) => {
      this.router.navigate(['/Skills']);
    });
  }

  changeSkill() {
    console.log('ChangeSkill');

    let newSkill = {
      nombre: this.checkoutForm.value.nombre || this.skill.nombre,
      percen: this.checkoutForm.value.percen || this.skill.percen,
    };
    this.skillSvc.changeSkill(newSkill, this.idSkill).subscribe((data) => {
      this.router.navigate(['/Skills']);
    });
  }

  onSubmit() {
    console.log('onSubmit');
    this.actualUrl.includes('add') ? this.addSkill() : this.changeSkill();
  }
}

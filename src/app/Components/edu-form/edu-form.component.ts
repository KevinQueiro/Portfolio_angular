import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionesI } from 'src/app/models/educaciones.interface';
import { EduService } from 'src/app/Services/edu.service';

@Component({
  selector: 'app-edu-form',
  templateUrl: './edu-form.component.html',
  styleUrls: ['./edu-form.component.css'],
})
export class EduFormComponent implements OnInit {
  eduTem = {
    lugar: '',
    fechaFin: '',
    titulo: '',
    foto: '',
  };

  idUser: string | null = '';
  idEdu: string | null = '';
  edu: EducacionesI = {
    lugar: '',
    fechaFin: '',
    titulo: '',
    foto: '',
  };
  checkoutForm = this.formBuilder.group(this.eduTem);
  actualUrl = window.location.href;
  sesion: boolean | undefined;

  constructor(
    private eduSvc: EduService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.router = router;
  }

  ngOnInit(): void {
    this.actualUrl.includes('add') ? null : this.getEdu();
    if (sessionStorage.getItem('sesion') == 'true') {
      this.sesion = true;
    }
  }

  getEdu() {
    this.route.paramMap.subscribe(
      (params) => (this.idEdu = params.get('eduId'))
    );
    this.eduSvc.getEduById(this.idEdu).subscribe((data) => (this.edu = data));
  }

  addEdu() {
    this.route.paramMap.subscribe(
      (params) => (this.idUser = params.get('userId'))
    );
    let newEdu = {
      lugar: this.checkoutForm.value.lugar || '',
      fechaFin: this.checkoutForm.value.fechaFin || '',
      titulo: this.checkoutForm.value.titulo || '',
      foto: this.checkoutForm.value.foto || '',
    };
    this.eduSvc
      .newEdu(newEdu, this.idUser)
      .subscribe((data) => this.router.navigate(['/Education']));
  }

  changeEdu() {
    let newEdu = {
      lugar: this.checkoutForm.value.lugar || this.edu.lugar,
      fechaFin: this.checkoutForm.value.fechaFin || this.edu.fechaFin,
      titulo: this.checkoutForm.value.titulo || this.edu.titulo,
      foto: this.checkoutForm.value.foto || this.edu.foto,
    };
    this.eduSvc
      .changeEdu(this.idEdu, newEdu)
      .subscribe((data) => this.router.navigate(['/Education']));
  }

  onSubmit() {
    this.actualUrl.includes('add') ? this.addEdu() : this.changeEdu();
  }
}

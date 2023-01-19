import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TecnologiaI } from 'src/app/models/tecnologias.interface';
import { TecnoService } from 'src/app/Services/tecno.service';

@Component({
  selector: 'app-tecno-form',
  templateUrl: './tecno-form.component.html',
  styleUrls: ['./tecno-form.component.css'],
})
export class TecnoFormComponent implements OnInit {
  idTecno: string | null = '';
  tecno: TecnologiaI = { nombre: '', tipo: '' };
  checkoutForm = this.formBuilder.group({ nombre: '', tipo: '' });
  actualUrl = window.location.href;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private tecnoSvc: TecnoService,
    private route: ActivatedRoute
  ) {
    this.router = router;
  }

  ngOnInit(): void {
    this.actualUrl.includes('add') ? null : this.getTecno();
  }

  getTecno() {
    this.route.paramMap.subscribe(
      (params) => (this.idTecno = params.get('tecnoId'))
    );
    this.tecnoSvc
      .getTecnoById(this.idTecno)
      .subscribe((data) => (this.tecno = data));
  }

  addTecno() {
    let newTecno = {
      nombre: this.checkoutForm.value.nombre || '',
      tipo: this.checkoutForm.value.tipo || '',
    };
    this.tecnoSvc.newTecno(newTecno).subscribe((data) => {
      history.back();
    });
  }

  changeTecno() {
    let newTecno = {
      nombre: this.checkoutForm.value.nombre || this.tecno.nombre,
      tipo: this.checkoutForm.value.tipo || this.tecno.tipo,
    };
    console.log(newTecno);
    
    this.tecnoSvc.changeTecno(newTecno, this.idTecno).subscribe((data) => {
      history.back();
    });
  }

  onSubmit() {
    this.actualUrl.includes('add') ? this.addTecno() : this.changeTecno();
  }
}

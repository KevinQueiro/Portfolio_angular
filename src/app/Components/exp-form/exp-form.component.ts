import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciasI } from 'src/app/models/experiencias.interface';
import { TecnologiaI } from 'src/app/models/tecnologias.interface';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-exp-form',
  templateUrl: './exp-form.component.html',
  styleUrls: ['./exp-form.component.css'],
})
export class ExpFormComponent implements OnInit {
  expTem = {
    descripcion: '',
    lugar: '',
    foto: '',
    fechaIni: '',
    fechaFin: ''
  };
  idUser: string | null = '';
  idExp: string | null = '';
  exp: ExperienciasI = {
    descripcion: '',
    lugar: '',
    foto: '',
    fechaIni: '',
    fechaFin: '',
  };
  tecnos!: TecnologiaI[];
  checkoutForm = this.formBuilder.group(this.expTem);
  actualUrl = window.location.href;

  constructor(
    private dataSvc: DataService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.router = router;
  }

  ngOnInit(): void {
    this.dataSvc.getAllTecno().subscribe((data) => (this.tecnos = data));
    this.actualUrl.includes('add') ? null : this.getExp();
  }

  getExp() {
    this.route.paramMap.subscribe(
      (params) => (this.idExp = params.get('expId'))
    );
    this.dataSvc
    .getExpById(this.idExp)
    .subscribe((data) => (this.exp = data));
  }

  addExp() {
    console.log('add');
    this.route.paramMap.subscribe(
      (params) => (this.idUser = params.get('userId'))
    );
    let newExp = {
      descripcion: this.checkoutForm.value.descripcion || '',
      lugar: this.checkoutForm.value.lugar || '',
      foto: this.checkoutForm.value.foto ||'',
      fechaIni: this.checkoutForm.value.fechaIni || '',
      fechaFin: this.checkoutForm.value.fechaFin || ''
    }
    this.dataSvc.newExp(newExp, this.idUser).subscribe((data) =>{
      this.router.navigate(['/Exp'])
    })
  }

  changeExp() {
    let newExp = {
      descripcion: this.checkoutForm.value.descripcion || this.exp.descripcion,
      lugar: this.checkoutForm.value.lugar || this.exp.lugar,
      foto: this.checkoutForm.value.foto ||this.exp.foto,
      fechaIni: this.checkoutForm.value.fechaIni || this.exp.fechaIni,
      fechaFin: this.checkoutForm.value.fechaFin || this.exp.fechaFin
    };
    this.dataSvc.changeExp(this.idExp,newExp).subscribe((data) => {
      this.router.navigate(['/Exp']);
    });
  }

  onSubmit() {
    this.actualUrl.includes('add') ? this.addExp() : this.changeExp();
  }

  addTecno(idTecno:number|undefined){
    let newExp = {
      descripcion: this.checkoutForm.value.descripcion || this.exp.descripcion,
      lugar: this.checkoutForm.value.lugar || this.exp.lugar,
      foto: this.checkoutForm.value.foto ||this.exp.foto,
      fechaIni: this.checkoutForm.value.fechaIni || this.exp.fechaIni,
      fechaFin: this.checkoutForm.value.fechaFin || this.exp.fechaFin
    }
    console.log("datos",newExp);
  this.dataSvc.addTecno(this.exp.id,false,idTecno,newExp)
  .subscribe((data)=> null)
  this.router.navigate([`/Exp/change/${this.idExp}`]).then(() => window.location.reload())
  }

  deleteTecno(idTecno:number|undefined){
    let newExp = {
      descripcion: this.checkoutForm.value.descripcion || this.exp.descripcion,
      lugar: this.checkoutForm.value.lugar || this.exp.lugar,
      foto: this.checkoutForm.value.foto ||this.exp.foto,
      fechaIni: this.checkoutForm.value.fechaIni || this.exp.fechaIni,
      fechaFin: this.checkoutForm.value.fechaFin || this.exp.fechaFin
    }
    this.dataSvc.addTecno(this.exp.id,true,idTecno,newExp)
  .subscribe((data)=> null)
  this.router.navigate([`/Exp/change/${this.idExp}`]).then(() => window.location.reload())
  }
}

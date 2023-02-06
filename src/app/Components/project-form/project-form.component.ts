import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosI } from 'src/app/models/proyectos.interface';
import { TecnologiaI } from 'src/app/models/tecnologias.interface';
import { ProService } from 'src/app/Services/pro.service';
import { TecnoService } from 'src/app/Services/tecno.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
})
export class ProjectFormComponent implements OnInit {
  proTem = {
    nombre: '',
    descripcion: '',
    link: '',
    foto: '',
  };
  idUser: string | null = '';
  idPro: string | null = '';
  pro: ProyectosI = {
    nombre: '',
    descripcion: '',
    link: '',
    foto: '',
  };
  tecnos!: TecnologiaI[];
  checkoutForm = this.formBuilder.group(this.proTem);
  actualUrl = window.location.href;
  sesion: boolean | undefined;
  loading: boolean = true;

  constructor(
    private tecnoSvc: TecnoService,
    private proSvc: ProService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.router = router;
  }

  ngOnInit(): void {
    this.tecnoSvc.getAllTecno().subscribe((data) => (this.tecnos = data));
    this.actualUrl.includes('add') ? null : this.getPro();
    if (sessionStorage.getItem('sesion') == 'true') {
      this.sesion = true;
    } else {
      this.router.navigate(['/Projects'])
    }
  }

  getPro() {
    this.route.paramMap.subscribe(
      (params) => (this.idPro = params.get('proId'))
    );
    this.proSvc.getProById(this.idPro).subscribe((data) => {this.loading = false, (this.pro = data)});
  }

  addPro() {
    this.route.paramMap.subscribe(
      (params) => (this.idUser = params.get('userId'))
    );
    let newPro = {
      nombre: this.checkoutForm.value.nombre || '',
      descripcion: this.checkoutForm.value.descripcion || '',
      link: this.checkoutForm.value.link || '',
      foto: this.checkoutForm.value.foto || '',
    };
    this.proSvc.newPro(newPro, this.idUser).subscribe((data) => {
      this.router.navigate(['/Projects']);
    });
  }

  changePro() {
    let newPro = {
      nombre: this.checkoutForm.value.nombre || this.pro.nombre,
      descripcion: this.checkoutForm.value.descripcion || this.pro.descripcion,
      link: this.checkoutForm.value.link || this.pro.link,
      foto: this.checkoutForm.value.foto || this.pro.foto,
    };
    this.proSvc
      .changePro(this.idPro, newPro)
      .subscribe((data) => this.router.navigate(['/Projects']));
  }

  onSubmit() {
    this.actualUrl.includes('add') ? this.addPro() : this.changePro();
  }

  addTecno(idTecno: number | undefined) {
    let newPro = {
      nombre: this.checkoutForm.value.nombre || this.pro.nombre,
      descripcion: this.checkoutForm.value.descripcion || this.pro.descripcion,
      link: this.checkoutForm.value.link || this.pro.link,
      foto: this.checkoutForm.value.foto || this.pro.foto,
    };
    this.proSvc
      .addTecnoToPro(this.pro.id, false, idTecno, newPro)
      .subscribe((data) => null);
    this.router
      .navigate([`/Projects/change/${this.idPro}`])
      .then(() => window.location.reload());
  }

  deleteTecno(idTecno: number | undefined) {
    let newPro = {
      nombre: this.checkoutForm.value.nombre || this.pro.nombre,
      descripcion: this.checkoutForm.value.descripcion || this.pro.descripcion,
      link: this.checkoutForm.value.link || this.pro.link,
      foto: this.checkoutForm.value.foto || this.pro.foto,
    };
    this.proSvc
      .addTecnoToPro(this.pro.id, true, idTecno, newPro)
      .subscribe((data) => null);
    this.router
      .navigate([`/Projects/change/${this.idPro}`])
      .then(() => window.location.reload());
  }

  onDelete(idTecno: number | undefined) {
    this.tecnoSvc.deleteTecno(idTecno).subscribe((data) => null);
    this.router
      .navigate([`/Projects/change/${this.idPro}`])
      .then(() => window.location.reload());
  }
}

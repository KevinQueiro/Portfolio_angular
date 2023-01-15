import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  checkoutForm = this.formBuilder.group({
    UserName: 'User name',
    password: 'Password',
  });

  loged: boolean | undefined;

  constructor(
    private configAlert: NgbAlertConfig,
    private formBuilder: FormBuilder,
    private dataSvc: DataService,
    private router: Router
  ) {}

  onSubmit() {
    console.log(this.checkoutForm.value.UserName);

    this.dataSvc
      .login({
        UserName: this.checkoutForm.value.UserName ?? '',
        password: this.checkoutForm.value.password ?? '',
      })!
      .subscribe(async (algo) => {
        (this.loged = algo),
        this.loged==true? this.setSesion() : null;
      });
  }

  setSesion(): void {
    sessionStorage.setItem('sesion','true');
    this.router.navigate([]).then(()=>window.location.reload())
  }

}

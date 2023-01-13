import { Component } from '@angular/core';
import { FormBuilder } from '@Angular/forms';
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

  loged: boolean = false;

  constructor(private formBuilder: FormBuilder, private dataSvc:DataService) {}

  onSubmit(): void {
    console.log(this.checkoutForm.value.UserName);
    
    this.dataSvc.login({UserName:this.checkoutForm.value.UserName??"", password:this.checkoutForm.value.password??""})!.subscribe(algo => this.loged = algo)
    console.log("is the user loged?",this.loged);
    
  }
}

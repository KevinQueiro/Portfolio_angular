import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  sesion: boolean | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('sesion') == 'true') {
      this.sesion = true;
    }
  }

  closeSesion(){
    sessionStorage.clear();
    this.router.navigate([]).then(()=>window.location.reload())
  }
}

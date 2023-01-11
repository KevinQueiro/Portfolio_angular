import { Component, OnInit } from '@angular/core';
import { DataService } from "../../Services/data.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private dataSvc:DataService) { }

  ngOnInit(): void {
    this.dataSvc.getAllUsuarios().subscribe(data=>console.log('usuario',data))
  }

}

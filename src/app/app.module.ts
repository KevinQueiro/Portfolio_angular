import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './Components/landing/landing.component';
import { LoginComponent } from './Components/login/login.component';
import { Page404Component } from './Components/page404/page404.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ProyectsComponent } from './Components/proyects/proyects.component';
import { EducationComponent } from './Components/education/education.component';
import { StartComponent } from './Components/start/start.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@Angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    Page404Component,
    ExperienceComponent,
    SkillsComponent,
    ProyectsComponent,
    EducationComponent,
    StartComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

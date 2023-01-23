import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './Components/landing/landing.component';
import { LoginComponent } from './Components/login/login.component';
import { Page404Component } from './Components/page404/page404.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ProyectsComponent } from './Components/proyects/proyects.component';
import { EducationComponent } from './Components/education/education.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillFormComponent } from './Components/skill-form/skill-form.component';
import { ExpFormComponent } from './Components/exp-form/exp-form.component';
import { TecnoFormComponent } from './Components/tecno-form/tecno-form.component';
import { ProjectFormComponent } from './Components/project-form/project-form.component';
import { EduFormComponent } from './Components/edu-form/edu-form.component';

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
    NavbarComponent,
    FooterComponent,
    SkillFormComponent,
    ExpFormComponent,
    TecnoFormComponent,
    ProjectFormComponent,
    EduFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

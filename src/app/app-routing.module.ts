import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './Components/page404/page404.component';
import { LandingComponent } from './Components/landing/landing.component';
import { LoginComponent } from './Components/login/login.component';
import { StartComponent } from './Components/start/start.component';
import { EducationComponent } from './Components/education/education.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ProyectsComponent } from './Components/proyects/proyects.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { SkillFormComponent } from './Components/skill-form/skill-form.component';
import { TecnoFormComponent } from './Components/tecno-form/tecno-form.component';
import { ExpFormComponent } from './Components/exp-form/exp-form.component';
import { ProjectFormComponent } from './Components/project-form/project-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/Welcome', pathMatch: 'full' },
  {path:'Projects/add/:userId', component: ProjectFormComponent},
  {path:'Projects/change/:proId', component: ProjectFormComponent},
  { path: 'Tecno/add', component: TecnoFormComponent },
  { path: 'Tecno/change/:tecnoId', component: TecnoFormComponent },
  { path: 'Exp/add/:userId', component: ExpFormComponent },
  { path: 'Exp/change/:expId', component: ExpFormComponent },
  { path: 'Skills/change/:skillId', component: SkillFormComponent },
  { path: 'Skills/add/:userId', component: SkillFormComponent },
  { path: 'Welcome', component: LandingComponent },
  { path: 'Exp', component: ExperienceComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Start', component: StartComponent },
  { path: 'Education', component: EducationComponent },
  { path: 'Skills', component: SkillsComponent },
  { path: 'Projects', component: ProyectsComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

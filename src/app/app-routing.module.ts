import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './Components/page404/page404.component';
import { LandingComponent } from './Components/landing/landing.component';
import { LoginComponent } from './Components/login/login.component';
import { EducationComponent } from './Components/education/education.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ProyectsComponent } from './Components/proyects/proyects.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { SkillFormComponent } from './Components/skill-form/skill-form.component';
import { TecnoFormComponent } from './Components/tecno-form/tecno-form.component';
import { ExpFormComponent } from './Components/exp-form/exp-form.component';
import { ProjectFormComponent } from './Components/project-form/project-form.component';
import { EduFormComponent } from './Components/edu-form/edu-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/Welcome', pathMatch: 'full' },
  { path: 'Welcome', component: LandingComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Education', component: EducationComponent },
  { path: 'Education/add/:userId', component: EduFormComponent },
  { path: 'Education/change/:eduId', component: EduFormComponent },
  { path: 'Exp', component: ExperienceComponent },
  { path: 'Exp/add/:userId', component: ExpFormComponent },
  { path: 'Exp/change/:expId', component: ExpFormComponent },
  { path: 'Projects', component: ProyectsComponent },
  { path: 'Projects/add/:userId', component: ProjectFormComponent },
  { path: 'Projects/change/:proId', component: ProjectFormComponent },
  { path: 'Skills', component: SkillsComponent },
  { path: 'Skills/add/:userId', component: SkillFormComponent },
  { path: 'Skills/change/:skillId', component: SkillFormComponent },
  { path: 'Tecno/change/:tecnoId', component: TecnoFormComponent },
  { path: 'Tecno/add', component: TecnoFormComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

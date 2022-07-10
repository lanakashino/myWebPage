import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ExperiencesComponent} from "./experiences/experiences.component";
import {EducationComponent} from "./education/education.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'experiences', component: ExperiencesComponent},
  { path: 'education', component: EducationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

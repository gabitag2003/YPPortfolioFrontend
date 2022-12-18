import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewskillComponent } from './components/skills/newskill.component';
import { EditskillComponent } from './components/skills/editskill.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { NewproyectosComponent } from './components/proyectos/newproyectos.component';
import { EditproyectosComponent } from './components/proyectos/editproyectos.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'editedu/:id', component: EditeducacionComponent},
  {path: 'newskill', component: NewskillComponent},
  {path: 'editskill/:id', component: EditskillComponent},
  {path: 'editacercade/:id', component: EditAcercaDeComponent}, 
  {path: 'nuevoproyecto', component: NewproyectosComponent},
  {path: 'editproyectos/:id', component: EditproyectosComponent}, 


 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

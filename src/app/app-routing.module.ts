import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




// import { NgCircleProgressModule } from 'ng-circle-progress';
// @NgModule({
//   imports:  NgCircleProgressModule.forRoot({})],
 
 
// //veras que ahi esta el NgCircle.  Tambien ten en cuenta de que tu app-component.html tenga esta etiqueta:  <router-outlet></router-outlet>
// Sino te funciona escribeme por email. y entramos en un zoom luisfelipe782006@gmail

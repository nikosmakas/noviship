import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
/*The set of components and router directives declared in this NgModule that can be used 
in the template of any component that is part of an NgModule that imports this NgModule.   */
/* routerModule= The set of components and router directives declared in this NgModule 
    that can be used in the template of any component that is part of (an NgModule that imports this NgModule.)=app module
*/
exports: [RouterModule]
})
export class AppRoutingModule { }

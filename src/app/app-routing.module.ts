import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {path: '/' , component: AppComponent},
  {path: 'movie-details', component: MovieDetailsComponent }
];

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

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CollectionDetailsComponent } from './collection-details/collection-details.component';
import { CreateCollectionComponent } from './create-collection/create-collection.component';

import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesCollectionsComponent } from './movies-collections/movies-collections.component';
import { SearchPageComponent } from './search-page/search-page.component';
const routes: Routes = [
  {path: '', component: SearchPageComponent},
  {path: 'movie-details', component: MovieDetailsComponent },
  {path: 'movies-collections', component: MoviesCollectionsComponent},
  {path: 'collection-details', component: CollectionDetailsComponent},
  {path: 'create-collection', component: CreateCollectionComponent},
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

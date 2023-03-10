import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list'
import { MatFormFieldModule } from '@angular/material/form-field';

import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchPageComponent } from './search-page/search-page.component'; //lets make an http request
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorDirective } from './validator.directive';
import { MoviesCollectionsComponent } from './movies-collections/movies-collections.component';
import { CollectionDetailsComponent } from './collection-details/collection-details.component';
import { CreateCollectionComponent } from './create-collection/create-collection.component';
import { AddToCollectionPopupComponent } from './add-to-collection-popup/add-to-collection-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    SearchPageComponent,
    ValidatorDirective,
    MoviesCollectionsComponent,
    CollectionDetailsComponent,
    CreateCollectionComponent,
    AddToCollectionPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatFormFieldModule   

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MovieDetailsComponent]//In order for the component to be usable as a dialog body
})
export class AppModule { }

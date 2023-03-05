import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchPageComponent } from './search-page/search-page.component'; //lets make an http request


@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[MovieDetailsComponent]//In order for the component to be usable as a dialog body
})
export class AppModule { }

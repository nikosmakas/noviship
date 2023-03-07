import { HttpClient } from '@angular/common/http';
import { Component, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  api_key: string = "85204a8cc33baf447559fb6d51b18313";

  results: any[] = [];

  guestSessionId!: string;

  constructor(private http: HttpClient,
    private dialog: MatDialog,
    private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchQuery:''
      });
  }
  //formControl
  searchForm!: FormGroup;
  searchQuery!: string;

  ngOnInit() {
    //get session id
    this.http.get<any>(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${this.api_key}`)
      .subscribe(data => { this.guestSessionId = data.guest_session_id })

  }

  openPopup(getId: any) {
    const dialogConfig: any = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.minHeight = 500;
    dialogConfig.minWidth = 400;
    dialogConfig.data = {
      id: getId,
      sessionId: this.guestSessionId,
      api_key: this.api_key
    };



    this.dialog.open(MovieDetailsComponent, dialogConfig);

  }

  replaced!: string; //variable used as final query value
  pageIndex!: number;
  total_pages: any;





  searchMovie(val: string) {
    this.replaced = val.toString().replace(/ /g, '+');
    this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=85204a8cc33baf447559fb6d51b18313&query=${this.replaced}`, undefined)
      .subscribe(data => { this.results = data.results; this.pageIndex = data.page; this.total_pages = data.total_pages; });
  }


  previousPage() {
    if (this.pageIndex <= 1) { }//checks if the current page is the first page
    else {
      this.pageIndex--;
      this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=85204a8cc33baf447559fb6d51b18313&query=${this.replaced}&page=${this.pageIndex}`, undefined)
        .subscribe(data => { this.results = data.results; });
    }
  }

  nextPage() {
    if (this.pageIndex >= this.total_pages) { }//checks if the current page is the last page
    else {
      this.pageIndex++;
      this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=85204a8cc33baf447559fb6d51b18313&query=${this.replaced}&page=${this.pageIndex}`, undefined)
        .subscribe(data => { this.results = data.results; });

    }
  }

}

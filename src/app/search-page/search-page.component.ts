import { HttpClient } from '@angular/common/http';
import { Component, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {

  api_key: string = "85204a8cc33baf447559fb6d51b18313";

  results: any[] = [];

  guestSessionId!: string;

  constructor(private http: HttpClient,
    private dialog: MatDialog,
    private fb: FormBuilder) { 
      this.searchForm = this.fb.group({
        searchQuery: ['', [Validators.required, Validators.minLength(3), this.validator()]]
      });
    }

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

 //formControl
  searchQuery!: FormControl;
  searchForm!: any;

  validator() {
    return (control: { value: string; }) => {
      if (control.value && !/^[a-zA-Z0-9]+$/.test(control.value)) {
        return { 'alphanumeric': true };
      }
      return null;
    };
  }
  
  searchMovie(val: string) {
    if (val) {
      this.replaced = val.toString().replace(/ /g, '+');
      this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=85204a8cc33baf447559fb6d51b18313&query=${this.replaced}`, undefined) //hard coded due to a CORS(?) error
        .subscribe(data => { this.results = data.results;this.pageIndex = data.page; this.total_pages = data.total_pages; });
    }
    else {
      this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=85204a8cc33baf447559fb6d51b18313&query=joker`, undefined)
        .subscribe(data => { this.results = data.results; this.pageIndex = data.page; this.total_pages = data.total_pages; });
    }
  }
  // to be replaced with `https://api.themoviedb.org/3/search/movie?api_key=85204a8cc33baf447559fb6d51b18313&query=${val}`

  previousPage() {
    if (this.pageIndex <= 1) { }//checks if the current page is the first page
    else {
      this.pageIndex--;
      if (this.replaced !== undefined) {// checks if any value has been assigned
        this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=85204a8cc33baf447559fb6d51b18313&query=${this.replaced}&page=${this.pageIndex}`, undefined) //hard coded due to a CORS(?) error
          .subscribe(data => { this.results = data.results; });
      }
      else {
        this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=85204a8cc33baf447559fb6d51b18313&query=joker&page=${this.pageIndex}`, undefined)//still havent fixed CORS error
          .subscribe(data => { this.results = data.results; });
      }
    }
  }

  nextPage() {
    if (this.pageIndex >= this.total_pages) { }//checks if the current page is the last page
    else {
      this.pageIndex++;
      if (this.replaced !== undefined) {// checks if any value has been assigned
        this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=85204a8cc33baf447559fb6d51b18313&query=${this.replaced}&page=${this.pageIndex}`, undefined) //hard coded due to a CORS(?) error
          .subscribe(data => { this.results = data.results; });
      }
      else {
        this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=85204a8cc33baf447559fb6d51b18313&query=joker&page=${this.pageIndex}`, undefined)//still havent fixed CORS error
          .subscribe(data => { this.results = data.results; });
      }
    }
}







  /*
  //paginator paginates

  constractor(private app: AppService){}

  public array: any;
public displayedColumns = ['', '', '', '', ''];
public dataSource: any;    

public pageSize = 10;
public currentPage = 0;
public totalSize = 0;

@ViewChild(MatPaginator) paginator: MatPaginator | undefined;

//constructor(private app: AppService) { }

ngOnInit() {
  this.getArray();
}

public handlePage(e: any) {
  this.currentPage = e.pageIndex;
  this.pageSize = e.pageSize;
  this.iterator();
}

private getArray() {
  this.app.getDeliveries()
    .subscribe((response) => {
      this.dataSource = new MatTableDataSource<Element>(response);
      this.dataSource.paginator = this.paginator;
      this.array = response;
      this.totalSize = this.array.length;
      this.iterator();
    });
}

private iterator() {
  const end = (this.currentPage + 1) * this.pageSize;
  const start = this.currentPage * this.pageSize;
  const part = this.array.slice(start, end);
  this.dataSource = part;
}
*/
}

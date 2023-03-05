import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {


  results: any[] = [];

  openPopup() {
    //let params = `scrollbars=no,resizable=yes,status=no,location=no,toolbar=no,menubar=no,width=600,height=600,left=100,top=100`;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose= false;
    dialogConfig.autoFocus= true;

    this.dialog.open(MovieDetailsComponent,dialogConfig);



    //open('/movie-details', 'hello', params);
  }

  constructor(private http: HttpClient,
    private dialog: MatDialog) { }

  searchMovie(val: string) {

    this.http.get<any>("https://api.themoviedb.org/3/search/movie?api_key=85204a8cc33baf447559fb6d51b18313&query=joker").subscribe(data => { this.results = data.results });

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

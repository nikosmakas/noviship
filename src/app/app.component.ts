import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //import http client and construct it above the searchMovie()



@Component({
  /* A selector is used to identify each component uniquely into the component tree,
   and it also defines how the current component is represented in the HTML DOM.*/
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noviship';

  results: any[] = [];

  openPopup(){
    let params = `scrollbars=no,resizable=yes,status=no,location=no,toolbar=no,menubar=no,width=600,height=600,left=100,top=100`;

  open('/geiasas','hello',params) ;
  }

  constructor(private http: HttpClient) { }

  searchMovie(val: string){    
    this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=85204a8cc33baf447559fb6d51b18313&query=${val}`).subscribe(data => {this.results=data.results});
    
  }

}

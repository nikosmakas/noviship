import { Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  @Input() results.movie_id : AppComponent; /// PWS KANW INPUT TO MOVIE_ID TWN RESULTS APO TO APPCOMPONENT?????
  api_key: string = "85204a8cc33baf447559fb6d51b18313";
  
  selectedMovie: any[] = [];
  guestSessionId: any[] = [];

  constructor(private http: HttpClient) { }
  ngOnInit() {
    //gets movie details 
    this.http.get<any>(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&language=en-US`).subscribe(data => { this.selectedMovie = data.results; });

    //get guest user a session id so he can rate
    this.http.get<any>(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${this.api_key}`).subscribe(data =>{this.guestSessionId = data.results})
  }
  rated!: number;

  readRating(val: string){
    
    this.rated=parseInt(val);;
  }  

  postRating(){  
    let headers= new HttpHeaders({
      'Conntent-Type': 'application/json',
      'Charset': 'utf-8'
    })
    let options={headers: headers};
    let rating={"value": this.rated};
    this.http.post( `https://api.themoviedb.org/3/movie/${this.movie_id}/rating?api_key=${this.api_key}`,rating,options)
  }




}

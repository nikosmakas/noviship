import { Component, Inject, } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {

  api_key: string;

  selectedMovieId: number;

  results: any;

  guestSessionId!: string;

  rated!: number;
  
  constructor(private http: HttpClient,
    private dialogRef: MatDialogRef<MovieDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.selectedMovieId = parseInt(data.id);
    this.guestSessionId = data.guest_session_id;
    this.api_key = data.api_key;
  }



  ngOnInit() {
    // http get request based on the movie_id of the clicked movie 
    this.http.get<any>(`https://api.themoviedb.org/3/movie/${this.selectedMovieId}?api_key=${this.api_key}&language=en-US`, undefined)
      .subscribe(data => { this.results = data });
  }

  closePopup() {
    this.dialogRef.close();
  }




  readRating(val: string) {

    this.rated = parseFloat(val);
  }

  postRating() {
    let headers = new HttpHeaders({
      'Conntent-Type': 'application/json',
      'Charset': 'utf-8'
    })
    let options = { headers: headers };
    let rating = { "value": this.rated };
    this.http.post(`https://api.themoviedb.org/3/movie/${this.selectedMovieId}/rating?api_key=${this.api_key}`, rating, options);

  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { CollectionsServiceService } from '../collections-service.service';
import { Location } from '@angular/common';
import { collections, movies } from '../models/collection.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-to-collection-popup',
  templateUrl: './add-to-collection-popup.component.html',
  styleUrls: ['./add-to-collection-popup.component.css']
})
export class AddToCollectionPopupComponent implements OnInit{

  ngOnInit(): void {
    
  }
  movies: movies[]
  collections:any[];
  selectedCollection:any;
  constructor(private collectionsService: CollectionsServiceService, 
    private location: Location,
    @Inject(MAT_DIALOG_DATA) public data:any){
      this.movies=data.movies;
      this.collections=data.collections;
    }

    
    addMoviesToCollection(){

    }
  
  goBack(){
    this.location.back();
  }



}

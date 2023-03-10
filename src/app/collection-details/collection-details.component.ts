import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

import { collections } from '../models/collection.model';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionsServiceService } from '../collections-service.service';

import { Location } from '@angular/common';
@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.css']
})

export class CollectionDetailsComponent implements OnInit{

  constructor(private dialog: MatDialog,
    private location: Location,
    private route:ActivatedRoute,
    private collectionsService:CollectionsServiceService){}

    collection:any;
    
    ngOnInit(): void {
      
    const id = Number( this.route.snapshot.paramMap.get('id')); // const id had the type of string | null so i converted this.route.snapshot.paramMap.get('id') to a number
    this.collection = this.collectionsService.getCollection(id); 
    }

  OpenPopup(getId: any) { // opens movie details from collection details
    const dialogConfig: any = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.minHeight = 500;
    dialogConfig.minWidth = 400;
    dialogConfig.data = {
      id: getId
    };



    this.dialog.open(MovieDetailsComponent, dialogConfig);

  }
  goBack(){
    this.location.back();
  }
}

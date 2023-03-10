import { Component, Inject, OnInit } from '@angular/core';
import { CollectionsServiceService } from '../collections-service.service';
import { Location } from '@angular/common';
import { collections, movies } from '../models/collection.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-to-collection-popup',
  templateUrl: './add-to-collection-popup.component.html',
  styleUrls: ['./add-to-collection-popup.component.css']
})
export class AddToCollectionPopupComponent implements OnInit {

  ngOnInit(): void {
  }

  movies: movies[] = [];
  collections: any[];
  selectedCollection: any;

  constructor(
    private collectionsService: CollectionsServiceService,
    private location: Location,
    public dialogRef: MatDialogRef<AddToCollectionPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.movies = this.data.moviesToAdd;
    this.collections = data.collections;
  }


  addMoviesToCollection() {
    
    const collections = Array.isArray(this.selectedCollection) ? this.selectedCollection : [this.selectedCollection];
    collections.forEach(collectionId => {
      this.collectionsService.addMoviesToCollection(collectionId, this.movies);
    });
    this.dialogRef.close({ collectionId: this.selectedCollection, moviesToAdd: this.movies });

    
    
    
    //const result = { collectionId: this.selectedCollection, moviesToAdd: this.movies };
    //this.dialogRef.close(result);

  }

  goBack() {
    this.location.back();
  }



}

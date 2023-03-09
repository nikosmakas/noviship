import { Component } from '@angular/core';
import { CollectionsServiceService } from '../collections-service.service';
import { OnInit } from '@angular/core';
import { collections } from '../models/collection.model';
@Component({
  selector: 'app-movies-collections',
  templateUrl: './movies-collections.component.html',
  styleUrls: ['./movies-collections.component.css']
})
export class MoviesCollectionsComponent implements OnInit{

  constructor(private collectionsService: CollectionsServiceService){}

  collections:any ;

  ngOnInit() {
    this.collections=this.collectionsService.getCollections()
  }


}

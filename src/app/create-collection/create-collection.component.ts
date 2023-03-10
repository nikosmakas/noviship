import { Component } from '@angular/core';
import { CollectionsServiceService } from '../collections-service.service';
import { Location } from '@angular/common';
import { collections } from '../models/collection.model';
@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.css']
})
export class CreateCollectionComponent {
  //id=collections.length;
  title: string = '';
  description: string = '';

  constructor(private collectionsService: CollectionsServiceService,
    private location: Location) { }

  onSubmit() {
    this.collectionsService.createCollection(this.title, this.description);

    this.title = '';
    this.description = '';
  }
  
  goBack(){
    this.location.back();
  }

}

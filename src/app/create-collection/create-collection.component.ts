import { Component } from '@angular/core';
import { CollectionsServiceService } from '../collections-service.service';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.css']
})
export class CreateCollectionComponent {

  title: string = '';
  description: string = '';

  constructor(private collectionsService: CollectionsServiceService) { }

  onSubmit() {
    this.collectionsService.createCollection(this.title, this.description);
    this.title = '';
    this.description = '';
  }


}

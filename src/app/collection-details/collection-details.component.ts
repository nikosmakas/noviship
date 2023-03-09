import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.css']
})
export class CollectionDetailsComponent {

  constructor(private dialog: MatDialog){}

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
}

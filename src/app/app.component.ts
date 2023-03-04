import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noviship';

  results: any[] = [];
  openPopup(){
    let params = `scrollbars=no,resizable=yes,status=no,location=no,toolbar=no,menubar=no,
width=600,height=600,left=100,top=100`;

  open('/geiasas','hello',params) ;
  }


  searchMovie(){}

}

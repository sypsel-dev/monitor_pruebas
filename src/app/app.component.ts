import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'myApp';
 

  ImagePath: string;
  constructor(private http: HttpClient){
    this.ImagePath = '../assets/img/logo.ico'
  
  }

}

export class PaginatorOverviewExample {}
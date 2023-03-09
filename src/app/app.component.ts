import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import mdeData from './mde.json';  

interface Mde {  
  idCliente: String; 
  geolocalizacion: String;  
  punto_caliente: String;  
  cuadrante: String;  
  fecha: String;
}  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  p: number = 1;
  device_mde = "MDE";
  title = 'myApp';
  mde: Mde[] = mdeData;  
  //constructor(){
  //  console.log(this.mde);
  //}
  ImagePath: string;
  constructor(private http: HttpClient){
    this.ImagePath = '../assets/img/logo.ico'
    this.loadMdeData();
    this.loadMdiData();
  }
  mdeData: any[] = [];
  loadMdeData(){
    this.http
    .get('https://spysel-monitoreo.herokuapp.com/api/mde')
    .subscribe((mdeData: any)=>{
      this.mdeData = mdeData.reverse();
      //console.log(response);
      //alert(JSON.stringify(response));
    });
  }
  mdiData: any[] = [];
  loadMdiData(){
    this.http
    .get('https://spysel-monitoreo.herokuapp.com/api/mdi')
    .subscribe((mdiData: any)=>{
      this.mdiData = mdiData.reverse();
    });
  }
}

export class PaginatorOverviewExample {}
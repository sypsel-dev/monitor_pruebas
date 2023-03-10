import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mde',
  templateUrl: './mde.component.html',
  styleUrls: ['./mde.component.css']
})
export class MdeComponent {
  isLoading: boolean = false;
  p: number = 1;
  device_mde = "MDE"; 
  mdeData: any[] = [];
  
  constructor(private http: HttpClient){
    this.loadMdeData();
  }

  loadMdeData(){
    this.isLoading = true;
    this.http
    .get('https://spysel-monitoreo.herokuapp.com/api/mde')
    .subscribe((mdeData: any)=>{
      this.mdeData = mdeData.reverse();
      this.isLoading = false;
    });
  }
}

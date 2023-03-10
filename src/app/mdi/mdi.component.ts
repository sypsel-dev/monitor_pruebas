import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mdi',
  templateUrl: './mdi.component.html',
  styleUrls: ['./mdi.component.css']
})
export class MdiComponent {
  isLoading: boolean = false;
  p: number = 1;
  device_mdi = "MDI";
  mdiData: any[] = [];

  constructor(private http: HttpClient){
    this.loadMdiData();
  }
  
  loadMdiData(){
    this.isLoading = true;
    this.http
    .get('https://spysel-monitoreo.herokuapp.com/api/mdi')
    .subscribe((mdiData: any)=>{
      this.mdiData = mdiData.reverse();
      this.isLoading = false;
    });
  }
}

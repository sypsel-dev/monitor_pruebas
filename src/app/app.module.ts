import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EnviaAlertaComponent } from './envia-alerta/envia-alerta.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MdiComponent } from './mdi/mdi.component';
import { MdeComponent } from './mde/mde.component';

@NgModule({
  declarations: [
    AppComponent,
    EnviaAlertaComponent,
    MdiComponent,
    MdeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

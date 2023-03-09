import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnviaAlertaComponent } from './envia-alerta.component';

const routes: Routes = [
    {
      path: 'envia-alerta',
      component: EnviaAlertaComponent
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EnviaAlertaRoutingModule { }  
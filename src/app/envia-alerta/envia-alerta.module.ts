import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnviaAlertaComponent } from './envia-alerta.component';
import { EnviaAlertaRoutingModule } from './envia-alerta-routing.module';

@NgModule({
  declarations: [EnviaAlertaComponent],
  imports: [
    CommonModule,
    EnviaAlertaRoutingModule // Agregamos el módulo de rutas aquí
  ]
})
export class EnviaAlertaModule { }
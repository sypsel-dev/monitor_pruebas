import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviaAlertaComponent } from './envia-alerta.component';

describe('EnviaAlertaComponent', () => {
  let component: EnviaAlertaComponent;
  let fixture: ComponentFixture<EnviaAlertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviaAlertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviaAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

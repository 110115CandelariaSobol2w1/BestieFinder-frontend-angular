import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoPublicacionesEstadoComponent } from './grafico-publicaciones-estado.component';

describe('GraficoPublicacionesEstadoComponent', () => {
  let component: GraficoPublicacionesEstadoComponent;
  let fixture: ComponentFixture<GraficoPublicacionesEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoPublicacionesEstadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoPublicacionesEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

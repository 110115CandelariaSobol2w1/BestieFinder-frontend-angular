import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoPublicacionesComponent } from './grafico-publicaciones.component';

describe('GraficoPublicacionesComponent', () => {
  let component: GraficoPublicacionesComponent;
  let fixture: ComponentFixture<GraficoPublicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoPublicacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

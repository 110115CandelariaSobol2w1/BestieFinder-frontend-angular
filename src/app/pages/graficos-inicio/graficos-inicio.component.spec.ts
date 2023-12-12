import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosInicioComponent } from './graficos-inicio.component';

describe('GraficosInicioComponent', () => {
  let component: GraficosInicioComponent;
  let fixture: ComponentFixture<GraficosInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficosInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficosInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

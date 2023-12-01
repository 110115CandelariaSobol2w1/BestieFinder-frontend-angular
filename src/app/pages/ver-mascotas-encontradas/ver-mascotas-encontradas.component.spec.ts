import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMascotasEncontradasComponent } from './ver-mascotas-encontradas.component';

describe('VerMascotasEncontradasComponent', () => {
  let component: VerMascotasEncontradasComponent;
  let fixture: ComponentFixture<VerMascotasEncontradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMascotasEncontradasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerMascotasEncontradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

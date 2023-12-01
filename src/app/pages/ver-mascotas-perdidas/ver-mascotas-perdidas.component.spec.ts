import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMascotasPerdidasComponent } from './ver-mascotas-perdidas.component';

describe('VerMascotasPerdidasComponent', () => {
  let component: VerMascotasPerdidasComponent;
  let fixture: ComponentFixture<VerMascotasPerdidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMascotasPerdidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerMascotasPerdidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

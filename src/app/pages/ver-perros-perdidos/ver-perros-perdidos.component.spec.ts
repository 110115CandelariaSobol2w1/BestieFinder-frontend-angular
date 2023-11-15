import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPerrosPerdidosComponent } from './ver-perros-perdidos.component';

describe('VerPerrosPerdidosComponent', () => {
  let component: VerPerrosPerdidosComponent;
  let fixture: ComponentFixture<VerPerrosPerdidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPerrosPerdidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPerrosPerdidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

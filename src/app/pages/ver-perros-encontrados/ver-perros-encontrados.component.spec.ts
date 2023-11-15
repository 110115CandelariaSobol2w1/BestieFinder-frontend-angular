import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPerrosEncontradosComponent } from './ver-perros-encontrados.component';

describe('VerPerrosEncontradosComponent', () => {
  let component: VerPerrosEncontradosComponent;
  let fixture: ComponentFixture<VerPerrosEncontradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPerrosEncontradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPerrosEncontradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

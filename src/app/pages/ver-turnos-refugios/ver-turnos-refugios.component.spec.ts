import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTurnosRefugiosComponent } from './ver-turnos-refugios.component';

describe('VerTurnosRefugiosComponent', () => {
  let component: VerTurnosRefugiosComponent;
  let fixture: ComponentFixture<VerTurnosRefugiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTurnosRefugiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerTurnosRefugiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

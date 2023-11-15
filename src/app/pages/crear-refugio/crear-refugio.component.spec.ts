import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRefugioComponent } from './crear-refugio.component';

describe('CrearRefugioComponent', () => {
  let component: CrearRefugioComponent;
  let fixture: ComponentFixture<CrearRefugioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRefugioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearRefugioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

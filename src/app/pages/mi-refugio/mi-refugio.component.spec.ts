import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiRefugioComponent } from './mi-refugio.component';

describe('MiRefugioComponent', () => {
  let component: MiRefugioComponent;
  let fixture: ComponentFixture<MiRefugioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiRefugioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiRefugioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

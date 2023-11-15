import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerRefugioComponent } from './ver-refugio.component';

describe('VerRefugioComponent', () => {
  let component: VerRefugioComponent;
  let fixture: ComponentFixture<VerRefugioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerRefugioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerRefugioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

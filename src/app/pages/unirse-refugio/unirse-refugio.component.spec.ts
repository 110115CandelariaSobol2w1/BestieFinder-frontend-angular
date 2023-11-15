import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnirseRefugioComponent } from './unirse-refugio.component';

describe('UnirseRefugioComponent', () => {
  let component: UnirseRefugioComponent;
  let fixture: ComponentFixture<UnirseRefugioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnirseRefugioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnirseRefugioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

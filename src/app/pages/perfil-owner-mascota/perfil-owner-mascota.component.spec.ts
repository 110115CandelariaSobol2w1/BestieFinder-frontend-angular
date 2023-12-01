import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilOwnerMascotaComponent } from './perfil-owner-mascota.component';

describe('PerfilOwnerMascotaComponent', () => {
  let component: PerfilOwnerMascotaComponent;
  let fixture: ComponentFixture<PerfilOwnerMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilOwnerMascotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilOwnerMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

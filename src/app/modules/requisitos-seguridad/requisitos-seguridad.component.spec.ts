import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitosSeguridadComponent } from './requisitos-seguridad.component';

describe('RequisitosSeguridadComponent', () => {
  let component: RequisitosSeguridadComponent;
  let fixture: ComponentFixture<RequisitosSeguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequisitosSeguridadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitosSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

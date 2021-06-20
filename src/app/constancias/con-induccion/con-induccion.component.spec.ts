import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConInduccionComponent } from './con-induccion.component';

describe('ConInduccionComponent', () => {
  let component: ConInduccionComponent;
  let fixture: ComponentFixture<ConInduccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConInduccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConInduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

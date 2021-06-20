import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsPaseComponent } from './cons-pase.component';

describe('ConsPaseComponent', () => {
  let component: ConsPaseComponent;
  let fixture: ComponentFixture<ConsPaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsPaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsPaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

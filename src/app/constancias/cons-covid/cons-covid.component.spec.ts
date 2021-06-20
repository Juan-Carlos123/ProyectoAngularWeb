import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsCovidComponent } from './cons-covid.component';

describe('ConsCovidComponent', () => {
  let component: ConsCovidComponent;
  let fixture: ComponentFixture<ConsCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

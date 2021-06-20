import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditartrabajadorComponent } from './editartrabajador.component';

describe('EditartrabajadorComponent', () => {
  let component: EditartrabajadorComponent;
  let fixture: ComponentFixture<EditartrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditartrabajadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditartrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

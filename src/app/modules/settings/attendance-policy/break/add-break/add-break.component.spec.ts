import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBreakComponent } from './add-break.component';

describe('AddBreakComponent', () => {
  let component: AddBreakComponent;
  let fixture: ComponentFixture<AddBreakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBreakComponent]
    });
    fixture = TestBed.createComponent(AddBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

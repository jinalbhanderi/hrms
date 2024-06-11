import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNonWorkingDayComponent } from './add-non-working-day.component';

describe('AddNonWorkingDayComponent', () => {
  let component: AddNonWorkingDayComponent;
  let fixture: ComponentFixture<AddNonWorkingDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNonWorkingDayComponent]
    });
    fixture = TestBed.createComponent(AddNonWorkingDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

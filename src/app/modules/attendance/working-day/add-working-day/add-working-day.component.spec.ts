import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkingDayComponent } from './add-working-day.component';

describe('AddWorkingDayComponent', () => {
  let component: AddWorkingDayComponent;
  let fixture: ComponentFixture<AddWorkingDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWorkingDayComponent]
    });
    fixture = TestBed.createComponent(AddWorkingDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAttendanceWithBreakComponent } from './daily-attendance-with-break.component';

describe('DailyAttendanceWithBreakComponent', () => {
  let component: DailyAttendanceWithBreakComponent;
  let fixture: ComponentFixture<DailyAttendanceWithBreakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyAttendanceWithBreakComponent]
    });
    fixture = TestBed.createComponent(DailyAttendanceWithBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

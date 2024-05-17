import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAttendanceLocationComponent } from './daily-attendance-location.component';

describe('DailyAttendanceLocationComponent', () => {
  let component: DailyAttendanceLocationComponent;
  let fixture: ComponentFixture<DailyAttendanceLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyAttendanceLocationComponent]
    });
    fixture = TestBed.createComponent(DailyAttendanceLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAttendanceByDepartmentComponent } from './daily-attendance-by-department.component';

describe('DailyAttendanceByDepartmentComponent', () => {
  let component: DailyAttendanceByDepartmentComponent;
  let fixture: ComponentFixture<DailyAttendanceByDepartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyAttendanceByDepartmentComponent]
    });
    fixture = TestBed.createComponent(DailyAttendanceByDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

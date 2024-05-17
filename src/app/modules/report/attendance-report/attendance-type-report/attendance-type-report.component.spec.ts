import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceTypeReportComponent } from './attendance-type-report.component';

describe('AttendanceTypeReportComponent', () => {
  let component: AttendanceTypeReportComponent;
  let fixture: ComponentFixture<AttendanceTypeReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceTypeReportComponent]
    });
    fixture = TestBed.createComponent(AttendanceTypeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

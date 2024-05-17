import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceSummaryReportComponent } from './attendance-summary-report.component';

describe('AttendanceSummaryReportComponent', () => {
  let component: AttendanceSummaryReportComponent;
  let fixture: ComponentFixture<AttendanceSummaryReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceSummaryReportComponent]
    });
    fixture = TestBed.createComponent(AttendanceSummaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

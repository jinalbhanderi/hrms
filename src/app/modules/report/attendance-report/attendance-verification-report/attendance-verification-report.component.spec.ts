import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceVerificationReportComponent } from './attendance-verification-report.component';

describe('AttendanceVerificationReportComponent', () => {
  let component: AttendanceVerificationReportComponent;
  let fixture: ComponentFixture<AttendanceVerificationReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceVerificationReportComponent]
    });
    fixture = TestBed.createComponent(AttendanceVerificationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

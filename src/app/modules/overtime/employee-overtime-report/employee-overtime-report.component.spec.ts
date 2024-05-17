import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOvertimeReportComponent } from './employee-overtime-report.component';

describe('EmployeeOvertimeReportComponent', () => {
  let component: EmployeeOvertimeReportComponent;
  let fixture: ComponentFixture<EmployeeOvertimeReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeOvertimeReportComponent]
    });
    fixture = TestBed.createComponent(EmployeeOvertimeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

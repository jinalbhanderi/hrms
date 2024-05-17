import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpStatusReportComponent } from './emp-status-report.component';

describe('EmpStatusReportComponent', () => {
  let component: EmpStatusReportComponent;
  let fixture: ComponentFixture<EmpStatusReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpStatusReportComponent]
    });
    fixture = TestBed.createComponent(EmpStatusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

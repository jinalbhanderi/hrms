import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyHoursReportComponent } from './company-hours-report.component';

describe('CompanyHoursReportComponent', () => {
  let component: CompanyHoursReportComponent;
  let fixture: ComponentFixture<CompanyHoursReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyHoursReportComponent]
    });
    fixture = TestBed.createComponent(CompanyHoursReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

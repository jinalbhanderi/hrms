import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthBenefitReportComponent } from './health-benefit-report.component';

describe('HealthBenefitReportComponent', () => {
  let component: HealthBenefitReportComponent;
  let fixture: ComponentFixture<HealthBenefitReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthBenefitReportComponent]
    });
    fixture = TestBed.createComponent(HealthBenefitReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

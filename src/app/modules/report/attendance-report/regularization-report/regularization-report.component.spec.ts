import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularizationReportComponent } from './regularization-report.component';

describe('RegularizationReportComponent', () => {
  let component: RegularizationReportComponent;
  let fixture: ComponentFixture<RegularizationReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegularizationReportComponent]
    });
    fixture = TestBed.createComponent(RegularizationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

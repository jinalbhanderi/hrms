import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakHourReportComponent } from './break-hour-report.component';

describe('BreakHourReportComponent', () => {
  let component: BreakHourReportComponent;
  let fixture: ComponentFixture<BreakHourReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreakHourReportComponent]
    });
    fixture = TestBed.createComponent(BreakHourReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

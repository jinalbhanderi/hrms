import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationReportComponent } from './compensation-report.component';

describe('CompensationReportComponent', () => {
  let component: CompensationReportComponent;
  let fixture: ComponentFixture<CompensationReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompensationReportComponent]
    });
    fixture = TestBed.createComponent(CompensationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

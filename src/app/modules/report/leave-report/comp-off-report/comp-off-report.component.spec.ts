import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompOffReportComponent } from './comp-off-report.component';

describe('CompOffReportComponent', () => {
  let component: CompOffReportComponent;
  let fixture: ComponentFixture<CompOffReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompOffReportComponent]
    });
    fixture = TestBed.createComponent(CompOffReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

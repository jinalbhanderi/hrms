import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidReportComponent } from './covid-report.component';

describe('CovidReportComponent', () => {
  let component: CovidReportComponent;
  let fixture: ComponentFixture<CovidReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CovidReportComponent]
    });
    fixture = TestBed.createComponent(CovidReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

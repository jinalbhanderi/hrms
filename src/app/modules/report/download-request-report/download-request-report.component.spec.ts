import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadRequestReportComponent } from './download-request-report.component';

describe('DownloadRequestReportComponent', () => {
  let component: DownloadRequestReportComponent;
  let fixture: ComponentFixture<DownloadRequestReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadRequestReportComponent]
    });
    fixture = TestBed.createComponent(DownloadRequestReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

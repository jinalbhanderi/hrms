import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStatusReportComponent } from './my-status-report.component';

describe('MyStatusReportComponent', () => {
  let component: MyStatusReportComponent;
  let fixture: ComponentFixture<MyStatusReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyStatusReportComponent]
    });
    fixture = TestBed.createComponent(MyStatusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

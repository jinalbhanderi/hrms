import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeExitRequestsComponent } from './employee-exit-requests.component';

describe('EmployeeExitRequestsComponent', () => {
  let component: EmployeeExitRequestsComponent;
  let fixture: ComponentFixture<EmployeeExitRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeExitRequestsComponent]
    });
    fixture = TestBed.createComponent(EmployeeExitRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

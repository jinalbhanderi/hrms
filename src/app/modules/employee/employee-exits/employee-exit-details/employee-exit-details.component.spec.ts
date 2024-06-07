import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeExitDetailsComponent } from './employee-exit-details.component';

describe('EmployeeExitDetailsComponent', () => {
  let component: EmployeeExitDetailsComponent;
  let fixture: ComponentFixture<EmployeeExitDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeExitDetailsComponent]
    });
    fixture = TestBed.createComponent(EmployeeExitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

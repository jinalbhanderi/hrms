import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpOvertimeComponent } from './emp-overtime.component';

describe('EmpOvertimeComponent', () => {
  let component: EmpOvertimeComponent;
  let fixture: ComponentFixture<EmpOvertimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpOvertimeComponent]
    });
    fixture = TestBed.createComponent(EmpOvertimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

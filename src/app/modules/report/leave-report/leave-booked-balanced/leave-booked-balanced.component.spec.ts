import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveBookedBalancedComponent } from './leave-booked-balanced.component';

describe('LeaveBookedBalancedComponent', () => {
  let component: LeaveBookedBalancedComponent;
  let fixture: ComponentFixture<LeaveBookedBalancedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveBookedBalancedComponent]
    });
    fixture = TestBed.createComponent(LeaveBookedBalancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

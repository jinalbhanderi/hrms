import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementWithTripComponent } from './reimbursement-with-trip.component';

describe('ReimbursementWithTripComponent', () => {
  let component: ReimbursementWithTripComponent;
  let fixture: ComponentFixture<ReimbursementWithTripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReimbursementWithTripComponent]
    });
    fixture = TestBed.createComponent(ReimbursementWithTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

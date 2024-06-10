import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementWithoutTripComponent } from './reimbursement-without-trip.component';

describe('ReimbursementWithoutTripComponent', () => {
  let component: ReimbursementWithoutTripComponent;
  let fixture: ComponentFixture<ReimbursementWithoutTripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReimbursementWithoutTripComponent]
    });
    fixture = TestBed.createComponent(ReimbursementWithoutTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReimbursementComponent } from './add-reimbursement.component';

describe('AddReimbursementComponent', () => {
  let component: AddReimbursementComponent;
  let fixture: ComponentFixture<AddReimbursementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddReimbursementComponent]
    });
    fixture = TestBed.createComponent(AddReimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

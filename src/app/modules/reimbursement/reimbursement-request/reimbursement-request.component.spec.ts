import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementRequestComponent } from './reimbursement-request.component';

describe('ReimbursementRequestComponent', () => {
  let component: ReimbursementRequestComponent;
  let fixture: ComponentFixture<ReimbursementRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReimbursementRequestComponent]
    });
    fixture = TestBed.createComponent(ReimbursementRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

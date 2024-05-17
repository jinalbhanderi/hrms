import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementTypeComponent } from './reimbursement-type.component';

describe('ReimbursementTypeComponent', () => {
  let component: ReimbursementTypeComponent;
  let fixture: ComponentFixture<ReimbursementTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReimbursementTypeComponent]
    });
    fixture = TestBed.createComponent(ReimbursementTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

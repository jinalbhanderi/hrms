import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalChainComponent } from './approval-chain.component';

describe('ApprovalChainComponent', () => {
  let component: ApprovalChainComponent;
  let fixture: ComponentFixture<ApprovalChainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovalChainComponent]
    });
    fixture = TestBed.createComponent(ApprovalChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

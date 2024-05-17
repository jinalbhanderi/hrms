import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompOffPolicyComponent } from './comp-off-policy.component';

describe('CompOffPolicyComponent', () => {
  let component: CompOffPolicyComponent;
  let fixture: ComponentFixture<CompOffPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompOffPolicyComponent]
    });
    fixture = TestBed.createComponent(CompOffPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

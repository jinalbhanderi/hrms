import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateCompOffPolicyComponent } from './crate-comp-off-policy.component';

describe('CrateCompOffPolicyComponent', () => {
  let component: CrateCompOffPolicyComponent;
  let fixture: ComponentFixture<CrateCompOffPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrateCompOffPolicyComponent]
    });
    fixture = TestBed.createComponent(CrateCompOffPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

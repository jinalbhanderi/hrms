import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevokeReasonComponent } from './revoke-reason.component';

describe('RevokeReasonComponent', () => {
  let component: RevokeReasonComponent;
  let fixture: ComponentFixture<RevokeReasonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevokeReasonComponent]
    });
    fixture = TestBed.createComponent(RevokeReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

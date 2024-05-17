import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveEnhancementComponent } from './leave-enhancement.component';

describe('LeaveEnhancementComponent', () => {
  let component: LeaveEnhancementComponent;
  let fixture: ComponentFixture<LeaveEnhancementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveEnhancementComponent]
    });
    fixture = TestBed.createComponent(LeaveEnhancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

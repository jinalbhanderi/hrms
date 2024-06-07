import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityLogsOfAgreementComponent } from './activity-logs-of-agreement.component';

describe('ActivityLogsOfAgreementComponent', () => {
  let component: ActivityLogsOfAgreementComponent;
  let fixture: ComponentFixture<ActivityLogsOfAgreementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityLogsOfAgreementComponent]
    });
    fixture = TestBed.createComponent(ActivityLogsOfAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

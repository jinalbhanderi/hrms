import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityLogBasicComponent } from './activity-log-basic.component';

describe('ActivityLogBasicComponent', () => {
  let component: ActivityLogBasicComponent;
  let fixture: ComponentFixture<ActivityLogBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityLogBasicComponent]
    });
    fixture = TestBed.createComponent(ActivityLogBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

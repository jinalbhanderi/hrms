import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShiftSchedulerComponent } from './create-shift-scheduler.component';

describe('CreateShiftSchedulerComponent', () => {
  let component: CreateShiftSchedulerComponent;
  let fixture: ComponentFixture<CreateShiftSchedulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateShiftSchedulerComponent]
    });
    fixture = TestBed.createComponent(CreateShiftSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

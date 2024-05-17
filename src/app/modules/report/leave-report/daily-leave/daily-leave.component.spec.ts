import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyLeaveComponent } from './daily-leave.component';

describe('DailyLeaveComponent', () => {
  let component: DailyLeaveComponent;
  let fixture: ComponentFixture<DailyLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyLeaveComponent]
    });
    fixture = TestBed.createComponent(DailyLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

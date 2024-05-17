import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonWorkingDayComponent } from './non-working-day.component';

describe('NonWorkingDayComponent', () => {
  let component: NonWorkingDayComponent;
  let fixture: ComponentFixture<NonWorkingDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonWorkingDayComponent]
    });
    fixture = TestBed.createComponent(NonWorkingDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

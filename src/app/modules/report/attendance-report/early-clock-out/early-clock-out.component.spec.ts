import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlyClockOutComponent } from './early-clock-out.component';

describe('EarlyClockOutComponent', () => {
  let component: EarlyClockOutComponent;
  let fixture: ComponentFixture<EarlyClockOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EarlyClockOutComponent]
    });
    fixture = TestBed.createComponent(EarlyClockOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

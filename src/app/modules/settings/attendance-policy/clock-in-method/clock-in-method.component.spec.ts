import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockInMethodComponent } from './clock-in-method.component';

describe('ClockInMethodComponent', () => {
  let component: ClockInMethodComponent;
  let fixture: ComponentFixture<ClockInMethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClockInMethodComponent]
    });
    fixture = TestBed.createComponent(ClockInMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

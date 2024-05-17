import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsecutiveExtraTimeComponent } from './consecutive-extra-time.component';

describe('ConsecutiveExtraTimeComponent', () => {
  let component: ConsecutiveExtraTimeComponent;
  let fixture: ComponentFixture<ConsecutiveExtraTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsecutiveExtraTimeComponent]
    });
    fixture = TestBed.createComponent(ConsecutiveExtraTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

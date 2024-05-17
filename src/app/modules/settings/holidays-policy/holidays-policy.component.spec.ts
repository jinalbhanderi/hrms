import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaysPolicyComponent } from './holidays-policy.component';

describe('HolidaysPolicyComponent', () => {
  let component: HolidaysPolicyComponent;
  let fixture: ComponentFixture<HolidaysPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HolidaysPolicyComponent]
    });
    fixture = TestBed.createComponent(HolidaysPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

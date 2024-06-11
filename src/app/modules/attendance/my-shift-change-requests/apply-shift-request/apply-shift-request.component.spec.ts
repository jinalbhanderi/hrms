import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyShiftRequestComponent } from './apply-shift-request.component';

describe('ApplyShiftRequestComponent', () => {
  let component: ApplyShiftRequestComponent;
  let fixture: ComponentFixture<ApplyShiftRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyShiftRequestComponent]
    });
    fixture = TestBed.createComponent(ApplyShiftRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

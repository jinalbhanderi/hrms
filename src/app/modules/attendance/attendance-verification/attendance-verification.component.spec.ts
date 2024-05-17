import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceVerificationComponent } from './attendance-verification.component';

describe('AttendanceVerificationComponent', () => {
  let component: AttendanceVerificationComponent;
  let fixture: ComponentFixture<AttendanceVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceVerificationComponent]
    });
    fixture = TestBed.createComponent(AttendanceVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

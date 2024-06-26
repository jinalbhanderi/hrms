import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceSettingComponent } from './attendance-setting.component';

describe('AttendanceSettingComponent', () => {
  let component: AttendanceSettingComponent;
  let fixture: ComponentFixture<AttendanceSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceSettingComponent]
    });
    fixture = TestBed.createComponent(AttendanceSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

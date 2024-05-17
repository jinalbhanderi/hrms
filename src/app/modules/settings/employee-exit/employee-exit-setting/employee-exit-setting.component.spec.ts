import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeExitSettingComponent } from './employee-exit-setting.component';

describe('EmployeeExitSettingComponent', () => {
  let component: EmployeeExitSettingComponent;
  let fixture: ComponentFixture<EmployeeExitSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeExitSettingComponent]
    });
    fixture = TestBed.createComponent(EmployeeExitSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

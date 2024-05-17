import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeExitsComponent } from './employee-exits.component';

describe('EmployeeExitsComponent', () => {
  let component: EmployeeExitsComponent;
  let fixture: ComponentFixture<EmployeeExitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeExitsComponent]
    });
    fixture = TestBed.createComponent(EmployeeExitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

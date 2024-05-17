import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesProbationComponent } from './employees-probation.component';

describe('EmployeesProbationComponent', () => {
  let component: EmployeesProbationComponent;
  let fixture: ComponentFixture<EmployeesProbationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesProbationComponent]
    });
    fixture = TestBed.createComponent(EmployeesProbationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

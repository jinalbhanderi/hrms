import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeExitTaskListComponent } from './employee-exit-task-list.component';

describe('EmployeeExitTaskListComponent', () => {
  let component: EmployeeExitTaskListComponent;
  let fixture: ComponentFixture<EmployeeExitTaskListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeExitTaskListComponent]
    });
    fixture = TestBed.createComponent(EmployeeExitTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

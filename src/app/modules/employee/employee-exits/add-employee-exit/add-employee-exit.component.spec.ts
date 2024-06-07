import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeExitComponent } from './add-employee-exit.component';

describe('AddEmployeeExitComponent', () => {
  let component: AddEmployeeExitComponent;
  let fixture: ComponentFixture<AddEmployeeExitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmployeeExitComponent]
    });
    fixture = TestBed.createComponent(AddEmployeeExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

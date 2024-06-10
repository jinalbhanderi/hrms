import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOvertimeComponent } from './create-overtime.component';

describe('CreateOvertimeComponent', () => {
  let component: CreateOvertimeComponent;
  let fixture: ComponentFixture<CreateOvertimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateOvertimeComponent]
    });
    fixture = TestBed.createComponent(CreateOvertimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOvertimeComponent } from './my-overtime.component';

describe('MyOvertimeComponent', () => {
  let component: MyOvertimeComponent;
  let fixture: ComponentFixture<MyOvertimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOvertimeComponent]
    });
    fixture = TestBed.createComponent(MyOvertimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

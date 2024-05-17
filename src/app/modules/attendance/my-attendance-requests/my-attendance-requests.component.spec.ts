import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAttendanceRequestsComponent } from './my-attendance-requests.component';

describe('MyAttendanceRequestsComponent', () => {
  let component: MyAttendanceRequestsComponent;
  let fixture: ComponentFixture<MyAttendanceRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAttendanceRequestsComponent]
    });
    fixture = TestBed.createComponent(MyAttendanceRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShiftChangeRequestsComponent } from './my-shift-change-requests.component';

describe('MyShiftChangeRequestsComponent', () => {
  let component: MyShiftChangeRequestsComponent;
  let fixture: ComponentFixture<MyShiftChangeRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyShiftChangeRequestsComponent]
    });
    fixture = TestBed.createComponent(MyShiftChangeRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

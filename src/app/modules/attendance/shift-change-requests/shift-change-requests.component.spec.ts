import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftChangeRequestsComponent } from './shift-change-requests.component';

describe('ShiftChangeRequestsComponent', () => {
  let component: ShiftChangeRequestsComponent;
  let fixture: ComponentFixture<ShiftChangeRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShiftChangeRequestsComponent]
    });
    fixture = TestBed.createComponent(ShiftChangeRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

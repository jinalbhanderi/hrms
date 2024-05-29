import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnLeaveModalComponent } from './on-leave-modal.component';

describe('OnLeaveModalComponent', () => {
  let component: OnLeaveModalComponent;
  let fixture: ComponentFixture<OnLeaveModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnLeaveModalComponent]
    });
    fixture = TestBed.createComponent(OnLeaveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

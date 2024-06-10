import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExitReasonComponent } from './add-exit-reason.component';

describe('AddExitReasonComponent', () => {
  let component: AddExitReasonComponent;
  let fixture: ComponentFixture<AddExitReasonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddExitReasonComponent]
    });
    fixture = TestBed.createComponent(AddExitReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

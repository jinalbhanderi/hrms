import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityStatusComponent } from './add-activity-status.component';

describe('AddActivityStatusComponent', () => {
  let component: AddActivityStatusComponent;
  let fixture: ComponentFixture<AddActivityStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddActivityStatusComponent]
    });
    fixture = TestBed.createComponent(AddActivityStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

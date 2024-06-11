import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyOnDutyComponent } from './apply-on-duty.component';

describe('ApplyOnDutyComponent', () => {
  let component: ApplyOnDutyComponent;
  let fixture: ComponentFixture<ApplyOnDutyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyOnDutyComponent]
    });
    fixture = TestBed.createComponent(ApplyOnDutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

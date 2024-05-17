import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpOnDutyRequestComponent } from './emp-on-duty-request.component';

describe('EmpOnDutyRequestComponent', () => {
  let component: EmpOnDutyRequestComponent;
  let fixture: ComponentFixture<EmpOnDutyRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpOnDutyRequestComponent]
    });
    fixture = TestBed.createComponent(EmpOnDutyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpEarlyOutComponent } from './emp-early-out.component';

describe('EmpEarlyOutComponent', () => {
  let component: EmpEarlyOutComponent;
  let fixture: ComponentFixture<EmpEarlyOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpEarlyOutComponent]
    });
    fixture = TestBed.createComponent(EmpEarlyOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

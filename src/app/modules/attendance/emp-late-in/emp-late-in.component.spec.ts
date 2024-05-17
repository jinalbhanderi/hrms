import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpLateInComponent } from './emp-late-in.component';

describe('EmpLateInComponent', () => {
  let component: EmpLateInComponent;
  let fixture: ComponentFixture<EmpLateInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpLateInComponent]
    });
    fixture = TestBed.createComponent(EmpLateInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

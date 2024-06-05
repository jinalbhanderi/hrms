import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbationStatusComponent } from './probation-status.component';

describe('ProbationStatusComponent', () => {
  let component: ProbationStatusComponent;
  let fixture: ComponentFixture<ProbationStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProbationStatusComponent]
    });
    fixture = TestBed.createComponent(ProbationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyReprocessComponent } from './penalty-reprocess.component';

describe('PenaltyReprocessComponent', () => {
  let component: PenaltyReprocessComponent;
  let fixture: ComponentFixture<PenaltyReprocessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PenaltyReprocessComponent]
    });
    fixture = TestBed.createComponent(PenaltyReprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

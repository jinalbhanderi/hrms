import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPenaltyReprocessComponent } from './add-penalty-reprocess.component';

describe('AddPenaltyReprocessComponent', () => {
  let component: AddPenaltyReprocessComponent;
  let fixture: ComponentFixture<AddPenaltyReprocessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPenaltyReprocessComponent]
    });
    fixture = TestBed.createComponent(AddPenaltyReprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

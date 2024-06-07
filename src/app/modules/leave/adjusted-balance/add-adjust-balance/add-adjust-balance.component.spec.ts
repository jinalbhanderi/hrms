import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdjustBalanceComponent } from './add-adjust-balance.component';

describe('AddAdjustBalanceComponent', () => {
  let component: AddAdjustBalanceComponent;
  let fixture: ComponentFixture<AddAdjustBalanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAdjustBalanceComponent]
    });
    fixture = TestBed.createComponent(AddAdjustBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

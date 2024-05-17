import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustedBalanceComponent } from './adjusted-balance.component';

describe('AdjustedBalanceComponent', () => {
  let component: AdjustedBalanceComponent;
  let fixture: ComponentFixture<AdjustedBalanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdjustedBalanceComponent]
    });
    fixture = TestBed.createComponent(AdjustedBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

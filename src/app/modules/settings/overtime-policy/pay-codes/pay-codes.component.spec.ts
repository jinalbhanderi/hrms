import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCodesComponent } from './pay-codes.component';

describe('PayCodesComponent', () => {
  let component: PayCodesComponent;
  let fixture: ComponentFixture<PayCodesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayCodesComponent]
    });
    fixture = TestBed.createComponent(PayCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

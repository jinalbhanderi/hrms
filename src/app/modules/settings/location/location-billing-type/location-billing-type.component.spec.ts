import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationBillingTypeComponent } from './location-billing-type.component';

describe('LocationBillingTypeComponent', () => {
  let component: LocationBillingTypeComponent;
  let fixture: ComponentFixture<LocationBillingTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationBillingTypeComponent]
    });
    fixture = TestBed.createComponent(LocationBillingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

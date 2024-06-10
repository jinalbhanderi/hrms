import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBiometricComponent } from './add-biometric.component';

describe('AddBiometricComponent', () => {
  let component: AddBiometricComponent;
  let fixture: ComponentFixture<AddBiometricComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBiometricComponent]
    });
    fixture = TestBed.createComponent(AddBiometricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

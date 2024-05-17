import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingFieldsComponent } from './onboarding-fields.component';

describe('OnboardingFieldsComponent', () => {
  let component: OnboardingFieldsComponent;
  let fixture: ComponentFixture<OnboardingFieldsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnboardingFieldsComponent]
    });
    fixture = TestBed.createComponent(OnboardingFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

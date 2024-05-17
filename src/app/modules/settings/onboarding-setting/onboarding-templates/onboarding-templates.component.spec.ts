import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingTemplatesComponent } from './onboarding-templates.component';

describe('OnboardingTemplatesComponent', () => {
  let component: OnboardingTemplatesComponent;
  let fixture: ComponentFixture<OnboardingTemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnboardingTemplatesComponent]
    });
    fixture = TestBed.createComponent(OnboardingTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

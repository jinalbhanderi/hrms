import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthBenefitComponent } from './health-benefit.component';

describe('HealthBenefitComponent', () => {
  let component: HealthBenefitComponent;
  let fixture: ComponentFixture<HealthBenefitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthBenefitComponent]
    });
    fixture = TestBed.createComponent(HealthBenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceTypeComponent } from './insurance-type.component';

describe('InsuranceTypeComponent', () => {
  let component: InsuranceTypeComponent;
  let fixture: ComponentFixture<InsuranceTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsuranceTypeComponent]
    });
    fixture = TestBed.createComponent(InsuranceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

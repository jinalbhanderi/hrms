import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryTemplateComponent } from './salary-template.component';

describe('SalaryTemplateComponent', () => {
  let component: SalaryTemplateComponent;
  let fixture: ComponentFixture<SalaryTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaryTemplateComponent]
    });
    fixture = TestBed.createComponent(SalaryTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

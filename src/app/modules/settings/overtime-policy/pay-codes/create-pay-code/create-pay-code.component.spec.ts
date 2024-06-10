import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePayCodeComponent } from './create-pay-code.component';

describe('CreatePayCodeComponent', () => {
  let component: CreatePayCodeComponent;
  let fixture: ComponentFixture<CreatePayCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePayCodeComponent]
    });
    fixture = TestBed.createComponent(CreatePayCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInsurancetypeComponent } from './add-insurancetype.component';

describe('AddInsurancetypeComponent', () => {
  let component: AddInsurancetypeComponent;
  let fixture: ComponentFixture<AddInsurancetypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddInsurancetypeComponent]
    });
    fixture = TestBed.createComponent(AddInsurancetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

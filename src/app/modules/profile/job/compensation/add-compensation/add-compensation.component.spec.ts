import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompensationComponent } from './add-compensation.component';

describe('AddCompensationComponent', () => {
  let component: AddCompensationComponent;
  let fixture: ComponentFixture<AddCompensationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCompensationComponent]
    });
    fixture = TestBed.createComponent(AddCompensationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

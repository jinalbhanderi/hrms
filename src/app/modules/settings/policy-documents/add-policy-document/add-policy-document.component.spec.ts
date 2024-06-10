import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPolicyDocumentComponent } from './add-policy-document.component';

describe('AddPolicyDocumentComponent', () => {
  let component: AddPolicyDocumentComponent;
  let fixture: ComponentFixture<AddPolicyDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPolicyDocumentComponent]
    });
    fixture = TestBed.createComponent(AddPolicyDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

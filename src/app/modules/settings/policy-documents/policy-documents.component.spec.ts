import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDocumentsComponent } from './policy-documents.component';

describe('PolicyDocumentsComponent', () => {
  let component: PolicyDocumentsComponent;
  let fixture: ComponentFixture<PolicyDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyDocumentsComponent]
    });
    fixture = TestBed.createComponent(PolicyDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

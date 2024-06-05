import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDocumentComponent } from './add-new-document.component';

describe('AddNewDocumentComponent', () => {
  let component: AddNewDocumentComponent;
  let fixture: ComponentFixture<AddNewDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewDocumentComponent]
    });
    fixture = TestBed.createComponent(AddNewDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

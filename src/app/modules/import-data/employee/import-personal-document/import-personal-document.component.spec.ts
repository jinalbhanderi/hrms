import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportPersonalDocumentComponent } from './import-personal-document.component';

describe('ImportPersonalDocumentComponent', () => {
  let component: ImportPersonalDocumentComponent;
  let fixture: ComponentFixture<ImportPersonalDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportPersonalDocumentComponent]
    });
    fixture = TestBed.createComponent(ImportPersonalDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

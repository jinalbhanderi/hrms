import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportStatutoryComponent } from './import-statutory.component';

describe('ImportStatutoryComponent', () => {
  let component: ImportStatutoryComponent;
  let fixture: ComponentFixture<ImportStatutoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportStatutoryComponent]
    });
    fixture = TestBed.createComponent(ImportStatutoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

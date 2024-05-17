import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportSubCompanyComponent } from './import-sub-company.component';

describe('ImportSubCompanyComponent', () => {
  let component: ImportSubCompanyComponent;
  let fixture: ComponentFixture<ImportSubCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportSubCompanyComponent]
    });
    fixture = TestBed.createComponent(ImportSubCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportLocationComponent } from './import-location.component';

describe('ImportLocationComponent', () => {
  let component: ImportLocationComponent;
  let fixture: ComponentFixture<ImportLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportLocationComponent]
    });
    fixture = TestBed.createComponent(ImportLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

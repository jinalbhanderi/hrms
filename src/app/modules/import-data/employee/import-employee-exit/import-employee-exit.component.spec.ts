import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportEmployeeExitComponent } from './import-employee-exit.component';

describe('ImportEmployeeExitComponent', () => {
  let component: ImportEmployeeExitComponent;
  let fixture: ComponentFixture<ImportEmployeeExitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportEmployeeExitComponent]
    });
    fixture = TestBed.createComponent(ImportEmployeeExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

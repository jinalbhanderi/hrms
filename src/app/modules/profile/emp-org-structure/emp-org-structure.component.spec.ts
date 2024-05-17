import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpOrgStructureComponent } from './emp-org-structure.component';

describe('EmpOrgStructureComponent', () => {
  let component: EmpOrgStructureComponent;
  let fixture: ComponentFixture<EmpOrgStructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpOrgStructureComponent]
    });
    fixture = TestBed.createComponent(EmpOrgStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

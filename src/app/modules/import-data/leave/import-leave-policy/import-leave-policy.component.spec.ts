import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportLeavePolicyComponent } from './import-leave-policy.component';

describe('ImportLeavePolicyComponent', () => {
  let component: ImportLeavePolicyComponent;
  let fixture: ComponentFixture<ImportLeavePolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportLeavePolicyComponent]
    });
    fixture = TestBed.createComponent(ImportLeavePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

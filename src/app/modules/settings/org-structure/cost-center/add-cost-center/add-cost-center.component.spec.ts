import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCostCenterComponent } from './add-cost-center.component';

describe('AddCostCenterComponent', () => {
  let component: AddCostCenterComponent;
  let fixture: ComponentFixture<AddCostCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCostCenterComponent]
    });
    fixture = TestBed.createComponent(AddCostCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

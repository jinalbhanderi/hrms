import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSalaryDataComponent } from './view-salary-data.component';

describe('ViewSalaryDataComponent', () => {
  let component: ViewSalaryDataComponent;
  let fixture: ComponentFixture<ViewSalaryDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSalaryDataComponent]
    });
    fixture = TestBed.createComponent(ViewSalaryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

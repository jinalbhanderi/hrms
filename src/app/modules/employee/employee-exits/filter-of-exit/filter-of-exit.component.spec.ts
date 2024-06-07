import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOfExitComponent } from './filter-of-exit.component';

describe('FilterOfExitComponent', () => {
  let component: FilterOfExitComponent;
  let fixture: ComponentFixture<FilterOfExitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterOfExitComponent]
    });
    fixture = TestBed.createComponent(FilterOfExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

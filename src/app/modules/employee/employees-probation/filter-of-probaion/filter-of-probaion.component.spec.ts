import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOfProbaionComponent } from './filter-of-probaion.component';

describe('FilterOfProbaionComponent', () => {
  let component: FilterOfProbaionComponent;
  let fixture: ComponentFixture<FilterOfProbaionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterOfProbaionComponent]
    });
    fixture = TestBed.createComponent(FilterOfProbaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

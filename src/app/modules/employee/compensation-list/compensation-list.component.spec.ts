import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationListComponent } from './compensation-list.component';

describe('CompensationListComponent', () => {
  let component: CompensationListComponent;
  let fixture: ComponentFixture<CompensationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompensationListComponent]
    });
    fixture = TestBed.createComponent(CompensationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

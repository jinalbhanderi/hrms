import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompOffComponent } from './comp-off.component';

describe('CompOffComponent', () => {
  let component: CompOffComponent;
  let fixture: ComponentFixture<CompOffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompOffComponent]
    });
    fixture = TestBed.createComponent(CompOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

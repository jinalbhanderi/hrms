import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSegmentComponent } from './add-segment.component';

describe('AddSegmentComponent', () => {
  let component: AddSegmentComponent;
  let fixture: ComponentFixture<AddSegmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSegmentComponent]
    });
    fixture = TestBed.createComponent(AddSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

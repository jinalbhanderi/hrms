import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkLogComponent } from './add-work-log.component';

describe('AddWorkLogComponent', () => {
  let component: AddWorkLogComponent;
  let fixture: ComponentFixture<AddWorkLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWorkLogComponent]
    });
    fixture = TestBed.createComponent(AddWorkLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

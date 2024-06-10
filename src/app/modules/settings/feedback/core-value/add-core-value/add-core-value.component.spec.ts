import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoreValueComponent } from './add-core-value.component';

describe('AddCoreValueComponent', () => {
  let component: AddCoreValueComponent;
  let fixture: ComponentFixture<AddCoreValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCoreValueComponent]
    });
    fixture = TestBed.createComponent(AddCoreValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

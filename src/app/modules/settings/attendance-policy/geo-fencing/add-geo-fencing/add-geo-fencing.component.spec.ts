import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGeoFencingComponent } from './add-geo-fencing.component';

describe('AddGeoFencingComponent', () => {
  let component: AddGeoFencingComponent;
  let fixture: ComponentFixture<AddGeoFencingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGeoFencingComponent]
    });
    fixture = TestBed.createComponent(AddGeoFencingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

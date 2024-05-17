import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationWiseComponent } from './location-wise.component';

describe('LocationWiseComponent', () => {
  let component: LocationWiseComponent;
  let fixture: ComponentFixture<LocationWiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationWiseComponent]
    });
    fixture = TestBed.createComponent(LocationWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverTimeDataComponent } from './over-time-data.component';

describe('OverTimeDataComponent', () => {
  let component: OverTimeDataComponent;
  let fixture: ComponentFixture<OverTimeDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverTimeDataComponent]
    });
    fixture = TestBed.createComponent(OverTimeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

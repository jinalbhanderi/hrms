import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWeekendComponent } from './new-weekend.component';

describe('NewWeekendComponent', () => {
  let component: NewWeekendComponent;
  let fixture: ComponentFixture<NewWeekendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewWeekendComponent]
    });
    fixture = TestBed.createComponent(NewWeekendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHolidaysComponent } from './my-holidays.component';

describe('MyHolidaysComponent', () => {
  let component: MyHolidaysComponent;
  let fixture: ComponentFixture<MyHolidaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyHolidaysComponent]
    });
    fixture = TestBed.createComponent(MyHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

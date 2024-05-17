import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEarlyOutComponent } from './my-early-out.component';

describe('MyEarlyOutComponent', () => {
  let component: MyEarlyOutComponent;
  let fixture: ComponentFixture<MyEarlyOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyEarlyOutComponent]
    });
    fixture = TestBed.createComponent(MyEarlyOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCompOffComponent } from './my-comp-off.component';

describe('MyCompOffComponent', () => {
  let component: MyCompOffComponent;
  let fixture: ComponentFixture<MyCompOffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCompOffComponent]
    });
    fixture = TestBed.createComponent(MyCompOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLateInComponent } from './my-late-in.component';

describe('MyLateInComponent', () => {
  let component: MyLateInComponent;
  let fixture: ComponentFixture<MyLateInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyLateInComponent]
    });
    fixture = TestBed.createComponent(MyLateInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOnDutyRequestComponent } from './my-on-duty-request.component';

describe('MyOnDutyRequestComponent', () => {
  let component: MyOnDutyRequestComponent;
  let fixture: ComponentFixture<MyOnDutyRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOnDutyRequestComponent]
    });
    fixture = TestBed.createComponent(MyOnDutyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInIpComponent } from './logged-in-ip.component';

describe('LoggedInIpComponent', () => {
  let component: LoggedInIpComponent;
  let fixture: ComponentFixture<LoggedInIpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoggedInIpComponent]
    });
    fixture = TestBed.createComponent(LoggedInIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

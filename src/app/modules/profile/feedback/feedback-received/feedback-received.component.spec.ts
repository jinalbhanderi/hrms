import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackReceivedComponent } from './feedback-received.component';

describe('FeedbackReceivedComponent', () => {
  let component: FeedbackReceivedComponent;
  let fixture: ComponentFixture<FeedbackReceivedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackReceivedComponent]
    });
    fixture = TestBed.createComponent(FeedbackReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerTicketsComponent } from './follower-tickets.component';

describe('FollowerTicketsComponent', () => {
  let component: FollowerTicketsComponent;
  let fixture: ComponentFixture<FollowerTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FollowerTicketsComponent]
    });
    fixture = TestBed.createComponent(FollowerTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

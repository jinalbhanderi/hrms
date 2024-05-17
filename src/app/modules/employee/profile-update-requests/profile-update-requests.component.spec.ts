import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUpdateRequestsComponent } from './profile-update-requests.component';

describe('ProfileUpdateRequestsComponent', () => {
  let component: ProfileUpdateRequestsComponent;
  let fixture: ComponentFixture<ProfileUpdateRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileUpdateRequestsComponent]
    });
    fixture = TestBed.createComponent(ProfileUpdateRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

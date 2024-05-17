import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUpdateRequestComponent } from './profile-update-request.component';

describe('ProfileUpdateRequestComponent', () => {
  let component: ProfileUpdateRequestComponent;
  let fixture: ComponentFixture<ProfileUpdateRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileUpdateRequestComponent]
    });
    fixture = TestBed.createComponent(ProfileUpdateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

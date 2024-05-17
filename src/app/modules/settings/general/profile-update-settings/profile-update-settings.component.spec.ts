import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUpdateSettingsComponent } from './profile-update-settings.component';

describe('ProfileUpdateSettingsComponent', () => {
  let component: ProfileUpdateSettingsComponent;
  let fixture: ComponentFixture<ProfileUpdateSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileUpdateSettingsComponent]
    });
    fixture = TestBed.createComponent(ProfileUpdateSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

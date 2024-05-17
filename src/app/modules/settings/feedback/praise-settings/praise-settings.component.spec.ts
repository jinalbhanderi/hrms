import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraiseSettingsComponent } from './praise-settings.component';

describe('PraiseSettingsComponent', () => {
  let component: PraiseSettingsComponent;
  let fixture: ComponentFixture<PraiseSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PraiseSettingsComponent]
    });
    fixture = TestBed.createComponent(PraiseSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

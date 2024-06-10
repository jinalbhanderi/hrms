import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccessLevelComponent } from './new-access-level.component';

describe('NewAccessLevelComponent', () => {
  let component: NewAccessLevelComponent;
  let fixture: ComponentFixture<NewAccessLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAccessLevelComponent]
    });
    fixture = TestBed.createComponent(NewAccessLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

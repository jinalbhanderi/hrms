import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateInComponent } from './late-in.component';

describe('LateInComponent', () => {
  let component: LateInComponent;
  let fixture: ComponentFixture<LateInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LateInComponent]
    });
    fixture = TestBed.createComponent(LateInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

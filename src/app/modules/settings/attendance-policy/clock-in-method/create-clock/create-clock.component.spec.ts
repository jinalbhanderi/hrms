import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClockComponent } from './create-clock.component';

describe('CreateClockComponent', () => {
  let component: CreateClockComponent;
  let fixture: ComponentFixture<CreateClockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateClockComponent]
    });
    fixture = TestBed.createComponent(CreateClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

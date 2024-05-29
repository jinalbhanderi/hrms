import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourTimingComponent } from './your-timing.component';

describe('YourTimingComponent', () => {
  let component: YourTimingComponent;
  let fixture: ComponentFixture<YourTimingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourTimingComponent]
    });
    fixture = TestBed.createComponent(YourTimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

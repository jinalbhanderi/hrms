import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDashboardComponent } from './help-dashboard.component';

describe('HelpDashboardComponent', () => {
  let component: HelpDashboardComponent;
  let fixture: ComponentFixture<HelpDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpDashboardComponent]
    });
    fixture = TestBed.createComponent(HelpDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

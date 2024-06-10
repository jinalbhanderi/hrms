import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicActivityViewDetailsComponent } from './basic-activity-view-details.component';

describe('BasicActivityViewDetailsComponent', () => {
  let component: BasicActivityViewDetailsComponent;
  let fixture: ComponentFixture<BasicActivityViewDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicActivityViewDetailsComponent]
    });
    fixture = TestBed.createComponent(BasicActivityViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

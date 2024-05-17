import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfhOdComponent } from './wfh-od.component';

describe('WfhOdComponent', () => {
  let component: WfhOdComponent;
  let fixture: ComponentFixture<WfhOdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WfhOdComponent]
    });
    fixture = TestBed.createComponent(WfhOdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

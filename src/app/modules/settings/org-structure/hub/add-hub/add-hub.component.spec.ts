import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHubComponent } from './add-hub.component';

describe('AddHubComponent', () => {
  let component: AddHubComponent;
  let fixture: ComponentFixture<AddHubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHubComponent]
    });
    fixture = TestBed.createComponent(AddHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobInformationComponent } from './add-job-information.component';

describe('AddJobInformationComponent', () => {
  let component: AddJobInformationComponent;
  let fixture: ComponentFixture<AddJobInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddJobInformationComponent]
    });
    fixture = TestBed.createComponent(AddJobInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJobInformationComponent } from './edit-job-information.component';

describe('EditJobInformationComponent', () => {
  let component: EditJobInformationComponent;
  let fixture: ComponentFixture<EditJobInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditJobInformationComponent]
    });
    fixture = TestBed.createComponent(EditJobInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

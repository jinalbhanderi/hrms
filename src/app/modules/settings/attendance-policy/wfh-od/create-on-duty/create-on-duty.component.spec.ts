import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOnDutyComponent } from './create-on-duty.component';

describe('CreateOnDutyComponent', () => {
  let component: CreateOnDutyComponent;
  let fixture: ComponentFixture<CreateOnDutyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateOnDutyComponent]
    });
    fixture = TestBed.createComponent(CreateOnDutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

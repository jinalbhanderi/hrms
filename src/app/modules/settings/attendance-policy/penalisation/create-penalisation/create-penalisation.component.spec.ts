import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePenalisationComponent } from './create-penalisation.component';

describe('CreatePenalisationComponent', () => {
  let component: CreatePenalisationComponent;
  let fixture: ComponentFixture<CreatePenalisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePenalisationComponent]
    });
    fixture = TestBed.createComponent(CreatePenalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

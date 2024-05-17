import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousEmployerComponent } from './previous-employer.component';

describe('PreviousEmployerComponent', () => {
  let component: PreviousEmployerComponent;
  let fixture: ComponentFixture<PreviousEmployerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousEmployerComponent]
    });
    fixture = TestBed.createComponent(PreviousEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

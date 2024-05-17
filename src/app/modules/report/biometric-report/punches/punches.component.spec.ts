import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchesComponent } from './punches.component';

describe('PunchesComponent', () => {
  let component: PunchesComponent;
  let fixture: ComponentFixture<PunchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PunchesComponent]
    });
    fixture = TestBed.createComponent(PunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

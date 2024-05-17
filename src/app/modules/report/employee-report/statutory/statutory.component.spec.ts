import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutoryComponent } from './statutory.component';

describe('StatutoryComponent', () => {
  let component: StatutoryComponent;
  let fixture: ComponentFixture<StatutoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatutoryComponent]
    });
    fixture = TestBed.createComponent(StatutoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsentTodayComponent } from './absent-today.component';

describe('AbsentTodayComponent', () => {
  let component: AbsentTodayComponent;
  let fixture: ComponentFixture<AbsentTodayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbsentTodayComponent]
    });
    fixture = TestBed.createComponent(AbsentTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJoineeComponent } from './new-joinee.component';

describe('NewJoineeComponent', () => {
  let component: NewJoineeComponent;
  let fixture: ComponentFixture<NewJoineeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewJoineeComponent]
    });
    fixture = TestBed.createComponent(NewJoineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

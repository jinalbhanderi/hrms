import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterTypeComponent } from './letter-type.component';

describe('LetterTypeComponent', () => {
  let component: LetterTypeComponent;
  let fixture: ComponentFixture<LetterTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetterTypeComponent]
    });
    fixture = TestBed.createComponent(LetterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraiseComponent } from './praise.component';

describe('PraiseComponent', () => {
  let component: PraiseComponent;
  let fixture: ComponentFixture<PraiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PraiseComponent]
    });
    fixture = TestBed.createComponent(PraiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

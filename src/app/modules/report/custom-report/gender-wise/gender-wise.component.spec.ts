import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderWiseComponent } from './gender-wise.component';

describe('GenderWiseComponent', () => {
  let component: GenderWiseComponent;
  let fixture: ComponentFixture<GenderWiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenderWiseComponent]
    });
    fixture = TestBed.createComponent(GenderWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

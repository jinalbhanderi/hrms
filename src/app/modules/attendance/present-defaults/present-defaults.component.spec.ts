import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentDefaultsComponent } from './present-defaults.component';

describe('PresentDefaultsComponent', () => {
  let component: PresentDefaultsComponent;
  let fixture: ComponentFixture<PresentDefaultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentDefaultsComponent]
    });
    fixture = TestBed.createComponent(PresentDefaultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

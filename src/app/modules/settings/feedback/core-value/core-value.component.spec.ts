import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreValueComponent } from './core-value.component';

describe('CoreValueComponent', () => {
  let component: CoreValueComponent;
  let fixture: ComponentFixture<CoreValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreValueComponent]
    });
    fixture = TestBed.createComponent(CoreValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsentPresentComponent } from './absent-present.component';

describe('AbsentPresentComponent', () => {
  let component: AbsentPresentComponent;
  let fixture: ComponentFixture<AbsentPresentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbsentPresentComponent]
    });
    fixture = TestBed.createComponent(AbsentPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCompanyComponent } from './sub-company.component';

describe('SubCompanyComponent', () => {
  let component: SubCompanyComponent;
  let fixture: ComponentFixture<SubCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubCompanyComponent]
    });
    fixture = TestBed.createComponent(SubCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

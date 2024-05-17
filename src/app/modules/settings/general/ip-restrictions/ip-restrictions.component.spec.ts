import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpRestrictionsComponent } from './ip-restrictions.component';

describe('IpRestrictionsComponent', () => {
  let component: IpRestrictionsComponent;
  let fixture: ComponentFixture<IpRestrictionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpRestrictionsComponent]
    });
    fixture = TestBed.createComponent(IpRestrictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

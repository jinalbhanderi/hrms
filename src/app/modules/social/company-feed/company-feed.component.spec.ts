import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFeedComponent } from './company-feed.component';

describe('CompanyFeedComponent', () => {
  let component: CompanyFeedComponent;
  let fixture: ComponentFixture<CompanyFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyFeedComponent]
    });
    fixture = TestBed.createComponent(CompanyFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

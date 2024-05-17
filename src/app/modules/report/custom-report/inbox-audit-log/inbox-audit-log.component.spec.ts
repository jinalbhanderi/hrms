import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxAuditLogComponent } from './inbox-audit-log.component';

describe('InboxAuditLogComponent', () => {
  let component: InboxAuditLogComponent;
  let fixture: ComponentFixture<InboxAuditLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InboxAuditLogComponent]
    });
    fixture = TestBed.createComponent(InboxAuditLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

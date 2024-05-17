import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportLeaveComponent } from './import-leave.component';

describe('ImportLeaveComponent', () => {
  let component: ImportLeaveComponent;
  let fixture: ComponentFixture<ImportLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportLeaveComponent]
    });
    fixture = TestBed.createComponent(ImportLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

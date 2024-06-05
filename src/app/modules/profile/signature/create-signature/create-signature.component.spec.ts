import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSignatureComponent } from './create-signature.component';

describe('CreateSignatureComponent', () => {
  let component: CreateSignatureComponent;
  let fixture: ComponentFixture<CreateSignatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSignatureComponent]
    });
    fixture = TestBed.createComponent(CreateSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAccessComponent } from './product-access.component';

describe('ProductAccessComponent', () => {
  let component: ProductAccessComponent;
  let fixture: ComponentFixture<ProductAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAccessComponent]
    });
    fixture = TestBed.createComponent(ProductAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNotFoundComponent } from './products-not-found.component';

describe('ProductsNotFoundComponent', () => {
  let component: ProductsNotFoundComponent;
  let fixture: ComponentFixture<ProductsNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

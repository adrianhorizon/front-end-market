import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Product } from 'src/app/shared/models/products.model';
import { ProductService } from 'src/app/shared/services/products.service';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {

  product: Product;
  loading = true;
  sub: any;

  constructor(
    private authService: AuthService,
    private productService: ProductService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.GetProductDetail();
  }

  GetProductDetail() {
    this.sub = this.route.params.subscribe(params => {
      this.productService
        .getProductsId(params.id)
        .subscribe(
          (product: Product) => {
            this.product = product;
            this.loading = false; 
          }
        );
      });
  }

  addToCart(product: Product) {
		this.productService.addToCart(product);
	}

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

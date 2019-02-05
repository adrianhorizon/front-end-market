import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/products.model';
import { ProductService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent implements OnInit {
  product: Product;
  loading = true;
  sub: any;
  name: string;
  description: string;
  price: string;
  image: string;
  date: Date;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

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
            this.name = this.product.name;
            this.description = this.product.description;
            this.price = this.product.price;
            this.image = this.product.image;
            this.date = this.product.createdAt; 
            this.loading = false; 
          }
        );
      });
  }
}

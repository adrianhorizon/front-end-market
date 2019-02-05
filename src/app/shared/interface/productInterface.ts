import { Injectable, Input } from '@angular/core';
import { ProductService } from '../services/products.service';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class productInterface {
    @Input() sort = '-createdAt';
    products: Product[];

    constructor(
        private productService: ProductService
        ) { }
        
    async GetProducts() {
    this.productService
        .getProducts(this.sort)
        .subscribe(
        (products: Product[]) => this.products = products);
    }

    async addToCart(product: Product) {
        this.productService.addToCart(product);
    }
}
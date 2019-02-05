import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/products.model';
import { ProductService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.scss']
})
export class CartProductsComponent implements OnInit {
  cartProducts: Product[];
  showDataNotFound = true;

	messageTitle = 'No se encontraron productos en el carrito';
	messageDescription = 'Por favor, agrega productos al carrito';

	constructor(private productService: ProductService) {}

	ngOnInit() {
    this.getCartProduct();
  }
  
  addToCart(product: Product) {
		this.productService.addToCart(product);

		this.getCartProduct();
	}

	removeCartProduct(product: Product) {
		this.productService.removeLocalCartProduct(product);

		this.getCartProduct();
	}

	getCartProduct() {
    this.cartProducts = this.productService.getLocalCartProducts();
	}
}

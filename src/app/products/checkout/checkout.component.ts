import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/products.model';
import { ProductService } from 'src/app/shared/services/products.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartProducts: Product[];
  showDataNotFound = true;
  favoriteSeason: string;
  seasons: string[] = ['Tarjeta de crédito', 'Datáfono', 'Efectivo'];
  totalValue = 0;
  totalValueDomi = 4950;

	messageTitle = 'No se encontraron productos para finalizar tu compra';
	messageDescription = 'Por favor, agrega productos al carrito';

	constructor(
    private productService: ProductService,
    public snackBar: MatSnackBar
    ) {}

	ngOnInit() {
    this.getCartProduct();
    this.totalValue = 0;
		this.cartProducts.forEach((product) => {
      var numberSplitted = product.price.replace(",","")
      var totalSplited = numberSplitted.replace("$","")
      this.totalValue += Number(totalSplited)
		});
  } 
  
	removeCartProduct(product: Product) {
		this.productService.removeLocalCartProduct(product);

		this.getCartProduct();
	}

	getCartProduct() {
    this.cartProducts = this.productService.getLocalCartProducts();
  }
  
  confirmPay() {
    this.snackBar.open('Pedido Confirmado', ':D', {
      duration: 2500
    });
  }
}

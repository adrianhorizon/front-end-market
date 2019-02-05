import { Component, OnInit, Input, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { Product } from 'src/app/shared/models/products.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-cart-quantity',
  templateUrl: './cart-quantity.component.html',
  styleUrls: ['./cart-quantity.component.scss']
})

export class CartQuantityComponent implements OnInit, OnChanges {

  @Input() products: Product[];

	totalValue = 0;
	constructor(private authService: AuthService,) {}

	ngOnChanges(changes: SimpleChanges) {
		const dataChanges: SimpleChange = changes.products;

		const products: Product[] = dataChanges.currentValue;
		this.totalValue = 0;
		products.forEach((product) => {
      var numberSplitted = product.price.replace(",","")
      var totalSplited = numberSplitted.replace("$","")
      this.totalValue += Number(totalSplited)
		});
  }
  
  ngOnInit() {
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

}

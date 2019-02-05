import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Product } from '../models/products.model';
import { environment } from 'src/environments/environment';
import { HttpErrorHandler, HandleError } from './others/http-error-handler.service';
import { MatSnackBar } from '@angular/material';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable()
export class ProductService {  
  private handleError: HandleError;
  apiUrl: string;
  navbarCartCount = 0;

  constructor(
    private http: HttpClient,
    private router: Router,
    public snackBar: MatSnackBar,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ProductService');
    this.apiUrl = environment.apiUrl + 'products';
    this.calculateLocalCartProdCounts();
  }

  getProducts (sort = '-createdAt'): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}?sort=${sort}`)
      .pipe(
        catchError(this.handleError('getProducts', []))
      );
  }

  getProductsId (id: string): Observable<any[] | Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError('getProductsId', []))
      );
  }

  getToken() {
    const token = localStorage.getItem('token');
    return `?token=${token}`;
  }

  addProducts (product: Product): Observable<any> {
    const body = JSON.stringify(product);
    const token = this.getToken();
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    setTimeout(() => this.router.navigateByUrl('/products'), 800)
    return this.http.post(`${this.apiUrl}/${token}`, body, { headers: headers })
      .pipe(
        catchError(this.handleError('addProduct', product))
      );
  }

  deleteProducts (id: string): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/${id}`, httpOptions)
      .pipe(
        catchError(this.handleError('deleteProduct'))
      );
  }

  updateProducts (product: Product): Observable<Product> {
    const token = this.getToken()
    httpOptions.headers = httpOptions.headers.set('Authorization', token);

    return this.http.put<Product>(this.apiUrl, product, httpOptions)
      .pipe(
        catchError(this.handleError('updateProduct', product))
      );
  }

	addToCart(data: Product): void {
		let productLocal: Product[] = JSON.parse(localStorage.getItem('product-item-local')) || [];

    productLocal.push(data);
    this.snackBar.open('Producto Agregado', '', {
      duration: 2500
    });
    localStorage.setItem('product-item-local', JSON.stringify(productLocal));
    this.calculateLocalCartProdCounts();

	}

	removeLocalCartProduct(product: Product) {
		const products: Product[] = JSON.parse(localStorage.getItem('product-item-local'));

		for (let i = 0; i < products.length; i++) {
			if (products[i]._id === product._id) {
				products.splice(i, 1);
				break;
			}
		}
		localStorage.setItem('product-item-local', JSON.stringify(products));

		this.calculateLocalCartProdCounts();
	}

	getLocalCartProducts(): Product[] {
		const products: Product[] = JSON.parse(localStorage.getItem('product-item-local')) || [];
		return products;
	}

	calculateLocalCartProdCounts() {
		this.navbarCartCount = this.getLocalCartProducts().length;
  }
}

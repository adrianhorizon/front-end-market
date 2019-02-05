import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/products.model';
import { ProductService } from 'src/app/shared/services/products.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.scss'],
})
export class ProductsNewComponent implements OnInit {
  productProcess: boolean = false;
  productForm: FormGroup;
  product: Product[];

  error = new FormControl('', [Validators.required, Validators.email]);

  constructor(private productService: ProductService, 
              private router: Router, 
              private authService: AuthService) { }

  ngOnInit() {
    this.onLogin()
  }

  onLogin(){

    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/signin');
    }
    this.productForm = new FormGroup({
      quantity: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      available: new FormControl(null, Validators.required),
      stars: new FormControl(null, Validators.required),
      subLevel_id: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required)
    })
     var loco = this.productForm.get('price')
     console.log(loco)
  }
  
  onSubmit() {
  if (this.productForm.valid) {
    this.productProcess = true;
      const { quantity, price, available, stars, subLevel_id, title, description, image } = this.productForm.value;
      const newproduct = new Product( quantity, price, available, stars, subLevel_id, title, description, image );
      this.productService.addProducts(newproduct)
      .subscribe(
        this.authService.isLoggedIn
      );
    }
  }

  getErrorMessage() {
    return this.error.hasError('required') ? 'Ingrese su ' :
        this.error.hasError('email') ? 'Campo incorrecto ' :
            '';
  } 
}
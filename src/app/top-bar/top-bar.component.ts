import {ChangeDetectorRef, Component, OnDestroy, Input, OnInit, ViewChild} from '@angular/core';
import { FormControl } from '../../../node_modules/@angular/forms';
import {MediaMatcher} from '@angular/cdk/layout';
import { AuthService } from '../shared/services/auth.service';
import { ProductService } from '../shared/services/products.service';
import { Product } from '../shared/models/products.model';
import { CategoriesService } from '../shared/services/categories.service';
import { Categories } from '../shared/models/categories.model';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatAccordion } from '@angular/material';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})

export class TopBarComponent implements OnInit,OnDestroy {

  sessionInit = "Iniciar sesión";
  registerTitle = "Registrate";
  addProducts = "Agregar productos";
  closeSession = "Cerrar Sesion";
  profileTitle = "(Mi perfil)";

  @Input() sort = '-createdAt';
  @ViewChild('productAccordion') myPanels: MatAccordion;
  products: Product[];
  categories: Categories[];
  showFiller = false;
  mobileQuery: MediaQueryList;
  ControlProduct = new FormControl();
  filteredOptions: Observable<Product[]>;

  private _mobileQueryListener: () => void;

  constructor(
    private authService: AuthService, 
    private productService: ProductService,
    private categoriesService: CategoriesService, 
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher
    ) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
    this.searchProduct();
  }

  searchProduct() {
    this.filteredOptions = this.ControlProduct.valueChanges
      .pipe(
        startWith<string | Product>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this.filter(name) : this.products)
      );
  }

  filter(name: string): Product[] {
    return this.products.filter(option =>
      option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  getProducts() {
    this.productService
      .getProducts(this.sort)
      .subscribe(
        (products: Product[]) => this.products = products 
      );
  }

  getCategories(){
    this.categoriesService.getCategories().subscribe(
      (categories: Categories[]) => this.categories = categories
    )
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  fullName() {
    return this.authService.currentUser.fullName();
  }

  logout() {
    this.productService.navbarCartCount = 0;
    this.authService.logout();
  }
}

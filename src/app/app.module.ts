import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import 'hammerjs';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { AppComponent } from './app.component';
import { Routing } from '../app/shared/routing/app.routing';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { Page404Component } from './page404/page404.component';

import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';

import { ProductsComponent } from './products/products.component';
import { CartProductsComponent } from './products/cart-products/cart-products.component';
import { CartQuantityComponent } from './products/cart-quantity/cart-quantity.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsDetailComponent } from './products/products-detail/products-detail.component';
import { ProductsEditComponent } from './products/products-edit/products-edit.component';
import { ProductsNewComponent } from './products/products-new/products-new.component';
import { CheckoutComponent } from './products/checkout/checkout.component';
import { ProductsNotFoundComponent } from './products/products-not-found/products-not-found.component';

import { ProfileComponent } from './account/profile/profile.component';
import { ProfilePasswordComponent } from './account/profile-password/profile-password.component';
import { ProfileSideBarComponent } from './account/profile-side-bar/profile-side-bar.component';
import { ProfileAddressComponent } from './account/profile-address/profile-address.component';
import { ProfileNotificationsComponent } from './account/profile-notifications/profile-notifications.component';
import { ProfileOrdersComponent } from './account/profile-orders/profile-orders.component';
import { CreditTargetComponent } from './account/credit-target/credit-target.component';

import { AuthGuard } from './shared/guards/auth.guard';
import { AuthService } from './shared/services/auth.service';
import { ProductService } from './shared/services/products.service';
import { CategoriesService } from './shared/services/categories.service';

import { HttpErrorHandler } from './shared/services/others/http-error-handler.service';
import { MessageService } from './shared/services/others/message.service';
import { RequestCache, RequestCacheWithMap } from './shared/services/others/request-cache.service';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FilterByBrandPipe } from './shared/pipes/filterByBrand.pipe';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { SearchPipe } from './shared/pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    PrincipalPageComponent,
    Page404Component,
    ProductsComponent,
    TopBarComponent,
    ProductsListComponent,
    ProductsDetailComponent,
    ProductsNewComponent,
    ProfileComponent,
    ProfileSideBarComponent,
    CreditTargetComponent,
    ProductsEditComponent,
    FooterComponent,
    ProfilePasswordComponent,
    ProfileAddressComponent,
    ProfileNotificationsComponent,
    ProfileOrdersComponent,
    CartProductsComponent,
    CartQuantityComponent,
    CheckoutComponent,
    ProductsNotFoundComponent,
    FilterByBrandPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    Routing,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    CurrencyMaskModule
  ],
  entryComponents: [],
  providers: [
    AuthService,
    AuthGuard,
    ProductService,
    CategoriesService,
    HttpErrorHandler,
    MatDatepickerModule,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

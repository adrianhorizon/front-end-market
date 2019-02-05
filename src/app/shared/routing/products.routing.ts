import { AuthGuard } from "../guards/auth.guard";
import { ProductsNewComponent } from "src/app/products/products-new/products-new.component";
import { ProductsEditComponent } from "src/app/products/products-edit/products-edit.component";
import { ProductsDetailComponent } from "src/app/products/products-detail/products-detail.component";
import { CartProductsComponent } from "src/app/products/cart-products/cart-products.component";
import { CheckoutComponent } from "src/app/products/checkout/checkout.component";

export const PRODUCTS_ROUTES = [
  { path: '',  redirectTo: '/', pathMatch: 'full'  },
  { path: 'new', canActivate: [AuthGuard], component: ProductsNewComponent },
  { path: 'edit/:id', canActivate: [AuthGuard], component: ProductsEditComponent },
  { path: 'detail/:id', component: ProductsDetailComponent  },
  { path: 'cart-items', component: CartProductsComponent },
  { path: 'checkout', canActivate: [AuthGuard], component: CheckoutComponent },
];

import { RouterModule } from "@angular/router";
import { PrincipalPageComponent } from "src/app/principal-page/principal-page.component";
import { SigninComponent } from "src/app/signin/signin.component";
import { SignupComponent } from "src/app/signup/signup.component";
import { PRODUCTS_ROUTES } from "./products.routing";
import { ACCOUNT_ROUTES } from "./account.routing";
import { Page404Component } from "src/app/page404/page404.component";

const APP_ROUTES = [
    { path: '', component: PrincipalPageComponent, pathMatch: 'full' },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'products', children: PRODUCTS_ROUTES },
    { path: 'account', children: ACCOUNT_ROUTES },
    { path: '**', component: Page404Component }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);

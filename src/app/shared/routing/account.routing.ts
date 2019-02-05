import { ProfileComponent } from "src/app/account/profile/profile.component";
import { ProfilePasswordComponent } from "src/app/account/profile-password/profile-password.component";
import { ProfileAddressComponent } from "src/app/account/profile-address/profile-address.component";
import { ProfileNotificationsComponent } from "src/app/account/profile-notifications/profile-notifications.component";
import { ProfileOrdersComponent } from "src/app/account/profile-orders/profile-orders.component";
import { CreditTargetComponent } from "src/app/account/credit-target/credit-target.component";

export const ACCOUNT_ROUTES = [
    { path: '',  redirectTo: '/', pathMatch: 'full'  },
    { path: 'profile', component: ProfileComponent },
    { path: 'password', component: ProfilePasswordComponent },
    { path: 'address', component: ProfileAddressComponent },
    { path: 'notifications', component: ProfileNotificationsComponent },
    { path: 'orders', component: ProfileOrdersComponent },
    { path: 'card', component: CreditTargetComponent }
];


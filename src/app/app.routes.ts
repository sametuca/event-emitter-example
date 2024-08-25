import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DetailComponent } from './customer/detail/detail.component';

export const routes: Routes = [

    {
        component: CustomerComponent, path: "customer", pathMatch: "full"
    },
    {
        component: DetailComponent, path: "customer:/id", pathMatch: "full"
    }
        
];

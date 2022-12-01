import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'basket',
        component: BasketComponent
    },
    {
        path: 'checkout',
        component: CheckoutComponent
    },
    {
        path: 'confirmation',
        component: ConfirmationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}

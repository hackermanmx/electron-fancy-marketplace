import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ShopState } from './store';

import { BasketService } from '../shared/services/basket.service';

const components = [HomeComponent, BasketComponent, CheckoutComponent];

@NgModule({
    declarations: [...components, ConfirmationComponent],
    exports: [...components],
    providers: [BasketService],
    imports: [CommonModule, PagesRoutingModule, SharedModule, FormsModule, ReactiveFormsModule, NgxsModule.forFeature(ShopState)]
})
export class PagesModule {}

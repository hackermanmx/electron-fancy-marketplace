import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WalletComponent } from './wallet/wallet.component';
import { BasketWidgetComponent } from './basket-widget/basket-widget.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [WalletComponent, BasketWidgetComponent, HeaderComponent],
    imports: [CommonModule, RouterModule],
    exports: [WalletComponent, BasketWidgetComponent, HeaderComponent]
})
export class CoreModule {}

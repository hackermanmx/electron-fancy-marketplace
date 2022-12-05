import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/components/product/model/product.model';
import { Select } from '@ngxs/store';
import { BasketState, WalletState } from '../store';
import { WalletAmount } from '../../shared/mocks/wallet';

@Component({
    selector: 'efm-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
    @Select(BasketState.basketItems)
    products$!: Observable<Product[]>;

    @Select(BasketState.basketTotal)
    total$!: Observable<number>;

    @Select(WalletState.walletTotal)
    currentWalletAmount$!: Observable<number>;

    constructor() {}
}

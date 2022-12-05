import { Component, OnInit } from '@angular/core';
import { count, Observable, of } from 'rxjs';
import { Select } from '@ngxs/store';
import { BasketState } from '../../pages/store';
import { Product } from '../../shared/components/product/model/product.model';

@Component({
    selector: 'efm-basket-display',
    templateUrl: './basket-widget.component.html',
    styleUrls: ['./basket-widget.component.scss']
})
export class BasketWidgetComponent {
    @Select(BasketState.basketItems)
    count$!: Observable<Product[]>;

    constructor() {}
}

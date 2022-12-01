import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/components/product/model/product.model';
import { Select } from '@ngxs/store';
import { BasketState } from '../store/basket.state';

@Component({
    selector: 'efm-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
    @Select(BasketState.basketItems)
    products$!: Observable<Product[]>;

    @Select(BasketState.basketTotal)
    total$!: Observable<number>;

    constructor() {}

    ngOnInit() {
        // this.total$ = this.products$.pipe(map((items) => items.reduce((acc, obj) => acc + obj.price, 0)));
    }
}

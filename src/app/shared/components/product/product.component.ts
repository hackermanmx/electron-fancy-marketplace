import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from './model/product.model';
import { AddProductToBasket, BasketState } from '../../../pages/store';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
    selector: 'efm-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
    readonly ADD_BTN_STATES = {
        add: 'Add',
        basket: 'In Basket'
    };

    @Select(BasketState.basketItems)
    basket!: Observable<Product[]>;

    @Input() product!: Product;

    isInBasket = false;
    subSink = new SubSink();

    justARandomizer = (Math.random() * 100) / 100;

    constructor(private store: Store) {}

    ngOnInit() {
        this.subSink.sink = this.basket.subscribe((products) => {
            this.isInBasket = !!products.find((p) => p.id === this.product.id);
        });
    }

    ngOnDestroy() {
        this.subSink.unsubscribe();
    }

    addToBasket({ id }: Product) {
        this.store.dispatch(new AddProductToBasket(id));
    }
}

import { Component, Input } from '@angular/core';
import { Product } from './model/product.model';
import { AddProductToBasket } from '../../../pages/store/basket.actions';
import { Store } from '@ngxs/store';

@Component({
    selector: 'efm-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    justARandomizer = (Math.random() * 100) / 100;

    @Input() product!: Product;

    constructor(private store: Store) {}

    addToBasket({ id }: Product) {
        this.store.dispatch(new AddProductToBasket(id));
    }
}

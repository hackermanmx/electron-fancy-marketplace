import { Component, Input } from '@angular/core';
import { Product } from '../product/model/product.model';
import { BasketItem } from '../product/model/basket-item.model';
import { Store } from '@ngxs/store';
import { RemoveItem } from '../../../pages/store';

@Component({
    selector: 'efm-basket-product',
    templateUrl: './basket-product.component.html',
    styleUrls: ['./basket-product.component.scss']
})
export class BasketProductComponent {
    @Input() product!: Product;

    constructor(private store: Store) {}

    removeItem({ id }: BasketItem) {
        this.store.dispatch(new RemoveItem(id));
    }
}

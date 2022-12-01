import { Product } from '../../shared/components/product/model/product.model';

export class AddProductToBasket {
    static type = '[Products] Add to Basket';
    constructor(public readonly payload: Product['id']) {}
}

export class LoadBasketItems {
    static type = '[Basket] Load Basket Items';
}

export type BasketActions = AddProductToBasket | LoadBasketItems;

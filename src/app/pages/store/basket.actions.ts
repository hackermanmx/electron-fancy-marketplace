import { Product } from '../../shared/components/product/model/product.model';

export class AddProductToBasket {
    static type = '[Products] Add to Basket';
    constructor(public readonly payload: Product['id']) {}
}

export class LoadBasketItems {
    static type = '[Basket] Load Basket Items';
}

export class RemoveItem {
    static type = '[Basket] Remove Basket Item';
    constructor(public readonly payload: Product['id']) {}
}

export class ClearBasket {
    static type = '[Basket] Clear Basket';
}

export type BasketActions = AddProductToBasket | LoadBasketItems | RemoveItem | ClearBasket;

import { BasketItem, createBasketItem } from '../../shared/components/product/model/basket-item.model';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { Product } from '../../shared/components/product/model/product.model';
import { ProductState, ProductStateModel } from './product.state';
import * as basketActions from './basket.actions';
import { Injectable } from '@angular/core';

export interface BasketStateModel {
    basketItems: BasketItem[];
}

@State<BasketStateModel>({
    name: 'basket',
    defaults: {
        basketItems: []
    }
})
@Injectable()
export class BasketState {
    constructor(private store: Store) {}

    @Selector([ProductState])
    static basketItems(state: BasketStateModel, productState: ProductStateModel) {
        const { basketItems } = state;
        const products = productState.products;
        return joinItems(basketItems, products);
    }

    @Selector([ProductState])
    static basketTotal(state: BasketStateModel, productState: ProductStateModel) {
        const { basketItems } = state;
        const products = productState.products;
        return joinItems(basketItems, products).reduce((price: number, item: Product) => price + (item?.price || 0), 0);
    }

    @Action(basketActions.LoadBasketItems)
    loadBasketItems({ getState }: any) {
        const { basketItems } = getState();
        const products = this.store.selectSnapshot(ProductState.products);

        return joinItems(basketItems, products);
    }

    @Action(basketActions.AddProductToBasket)
    addProductToBasket({ getState, patchState }: StateContext<BasketStateModel>, { payload }: basketActions.AddProductToBasket) {
        const basketItems = getState().basketItems;

        const findIndex = basketItems.findIndex((c) => payload === c.id);
        if (findIndex > -1) {
            return patchState({
                basketItems: basketItems.map((i, index) => {
                    if (index !== findIndex) {
                        return i;
                    }
                    return {
                        ...i
                    };
                })
            });
        }

        const item = createBasketItem({
            id: payload
        });

        return patchState({
            basketItems: [...getState().basketItems, item]
        });
    }
}

function joinItems(basketItems: BasketItem[], products: Product[]) {
    return basketItems.map((basketItem) => {
        const product = products.find((p) => p.id === basketItem.id);
        return {
            ...basketItem,
            ...product
            // total: basketItem.quantity * product.price
        };
    });
}

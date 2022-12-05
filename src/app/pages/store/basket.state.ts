import { Injectable } from '@angular/core';
import { patch, removeItem } from '@ngxs/store/operators';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { BasketItem, createBasketItem } from '../../shared/components/product/model/basket-item.model';
import { Product } from '../../shared/components/product/model/product.model';
import { ProductState, ProductStateModel } from './product.state';
import * as basketActions from './basket.actions';
import { UpdateProducts } from './product.actions';
import { firstValueFrom } from 'rxjs';

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
        const { products } = productState;
        return joinItems(basketItems, products).reduce((price: number, item: Product) => price + (item.price || 0), 0);
    }

    @Action(basketActions.LoadBasketItems)
    loadBasketItems({ getState }: StateContext<BasketStateModel>) {
        const { basketItems } = getState();
        const products = this.store.selectSnapshot(ProductState.products);

        return joinItems(basketItems, products);
    }

    @Action(basketActions.AddProductToBasket)
    addProductToBasket({ getState, patchState }: StateContext<BasketStateModel>, { payload }: basketActions.AddProductToBasket) {
        const { basketItems } = getState();

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
            basketItems: [...basketItems, item]
        });
    }

    @Action(basketActions.RemoveItem)
    removeProductFromBasket({ setState }: StateContext<BasketStateModel>, { payload }: basketActions.RemoveItem) {
        setState(
            patch({
                basketItems: removeItem<Product>((p) => p?.id === payload)
            })
        );
    }

    @Action(basketActions.ClearBasket)
    async clearBasket({ patchState, getState }: StateContext<BasketStateModel>) {
        const products = this.store.selectSnapshot(ProductState.products);

        if (products.length) {
            const newProductList = products?.filter((p) => !getState().basketItems.find((b) => b.id === p.id));
            await firstValueFrom(this.store.dispatch(new UpdateProducts(newProductList)));
        }

        return patchState({
            basketItems: []
        });
    }
}

function joinItems(basketItems: BasketItem[], products: Product[]) {
    return basketItems.map((basketItem) => {
        const product = products.find((p) => p.id === basketItem.id);
        return {
            ...basketItem,
            ...product
        };
    });
}

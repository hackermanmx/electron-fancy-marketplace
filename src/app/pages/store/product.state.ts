import { State, Selector, Action, StateContext } from '@ngxs/store';
import { delay, tap } from 'rxjs/operators';
import { Product } from '../../shared/components/product/model/product.model';
import { BasketService } from '../../shared/services/basket.service';
import { GetProducts } from './product.actions';
import { Injectable } from '@angular/core';

export interface ProductStateModel {
    products: Product[];
    loaded: boolean;
    loading: boolean;
    selectedProductId: number | null;
}

@State<ProductStateModel>({
    name: 'productState',
    defaults: {
        products: [],
        loaded: false,
        loading: false,
        selectedProductId: null
    }
})
@Injectable()
export class ProductState {
    constructor(private service: BasketService) {}

    @Selector()
    static products(state: ProductStateModel): Product[] {
        return state.products;
    }

    @Action(GetProducts)
    getProducts({ getState, setState, patchState }: StateContext<ProductStateModel>) {
        patchState({
            loading: true
        });

        const state = getState();
        if (state.products.length) {
            return;
        }

        return this.service.getProducts().pipe(
            delay(1000),
            tap((products: Product[]) => {
                setState({
                    ...state,
                    products,
                    loading: false
                });
            })
        );
    }
}

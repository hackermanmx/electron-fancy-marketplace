import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { WalletAmount } from '../../shared/mocks/wallet';
import { UpdateWalletAmount } from './wallet.action';
import { BasketState } from './basket.state';

export interface WalletStateModel {
    total: number;
}

@State<WalletStateModel>({
    name: 'wallet',
    defaults: {
        total: WalletAmount
    }
})
@Injectable()
export class WalletState {
    constructor(private store: Store) {}

    @Selector([BasketState])
    static walletTotal({ total }: WalletStateModel) {
        return total;
    }

    @Action(UpdateWalletAmount)
    updateWalletTotal({ patchState, getState }: StateContext<WalletStateModel>) {
        const basketTotal = this.store.selectSnapshot(BasketState.basketTotal);
        console.log(basketTotal);
        return patchState({
            total: getState().total - basketTotal
        });
    }
}

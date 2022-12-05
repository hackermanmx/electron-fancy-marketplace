import { ProductState } from './product.state';
import { BasketState } from './basket.state';
import { WalletState } from './wallet.state';

export const ShopState = [ProductState, BasketState, WalletState];

export * from './product.actions';
export * from './product.state';
export * from './basket.actions';
export * from './basket.state';
export * from './wallet.action';
export * from './wallet.state';

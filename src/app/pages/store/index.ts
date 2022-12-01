import { ProductState } from './product.state';
import { BasketState } from './basket.state';

export const ShopState = [ProductState, BasketState];

export * from './product.actions';
export * from './product.state';
export * from './basket.actions';
export * from './basket.state';

import { Product } from '../../shared/components/product/model/product.model';

export class GetProducts {
    static type = '[Product] Load Products';
}

export class UpdateTotalPrice {
    static readonly type = '[Product] TotalPrice';

    constructor(public product: Product) {}
}

// export type ProductsActions = GetProducts;

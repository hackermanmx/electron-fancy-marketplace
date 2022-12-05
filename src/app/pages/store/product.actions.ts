import { Product } from '../../shared/components/product/model/product.model';

export class GetProducts {
    static type = '[Product] Load Products';
}

export class UpdateProducts {
    static type = '[Product] Update Products';
    constructor(public readonly newProductList: Product[]) {}
}

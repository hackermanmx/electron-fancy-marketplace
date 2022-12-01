export class BasketItem {
    id?: number;
    price?: number;
    productName?: string;
    img?: string;
}

export function createBasketItem(params: Partial<BasketItem>) {
    return {
        ...params
    } as BasketItem;
}

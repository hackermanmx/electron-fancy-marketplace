import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { BasketProductComponent } from './components/basket-product/basket-product.component';

const components = [ProductComponent];

@NgModule({
    declarations: [...components, BasketProductComponent],
    exports: [...components, BasketProductComponent],
    imports: [CommonModule]
})
export class SharedModule {}

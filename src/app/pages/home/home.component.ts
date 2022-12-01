import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/components/product/model/product.model';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { ProductState } from '../store/product.state';
import { GetProducts } from '../store/product.actions';

@Component({
    selector: 'efm-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @Select(ProductState.products)
    products$!: Observable<Product[]>;

    @Select((state: any) => state.productState.loading)
    loading$!: Observable<boolean>;

    constructor(private store: Store) {}

    ngOnInit() {
        this.store.dispatch(new GetProducts());
    }
}

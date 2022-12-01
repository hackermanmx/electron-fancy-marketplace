import { Injectable } from '@angular/core';
import ProductsMock from '../mocks/products.json';
import { Product } from '../components/product/model/product.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BasketService {
    apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        // return this.http.get<Product[]>(`${this.apiUrl}/products`);
        console.log(ProductsMock);
        return of(ProductsMock);
    }
}

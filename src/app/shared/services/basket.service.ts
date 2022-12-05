import { Injectable } from '@angular/core';
import ProductsMock from '../mocks/products.json';
import { Product } from '../components/product/model/product.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { WalletAmount } from '../mocks/wallet';

@Injectable({
    providedIn: 'root'
})
export class BasketService {
    apiUrl = environment.apiUrl;
    private updateWalletSubject$ = new BehaviorSubject<number>(WalletAmount);
    public updateWallet$ = this.updateWalletSubject$.asObservable();

    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        // return this.http.get<Product[]>(`${this.apiUrl}/products`);
        return of(ProductsMock);
    }

    updateWallet(total: number): void {
        this.updateWalletSubject$.next(total);
    }
}

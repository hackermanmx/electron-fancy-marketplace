import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'efm-wallet',
    templateUrl: './wallet.component.html',
    styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {
    walletAmount$: Observable<number>;

    constructor() {
        this.walletAmount$ = of(100);
    }
}

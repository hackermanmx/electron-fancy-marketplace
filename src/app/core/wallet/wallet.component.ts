import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { WalletState } from '../../pages/store';
import { Select } from '@ngxs/store';

@Component({
    selector: 'efm-wallet',
    templateUrl: './wallet.component.html',
    styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {
    @Select(WalletState.walletTotal)
    walletAmount$!: Observable<number>;

    constructor() {}
}

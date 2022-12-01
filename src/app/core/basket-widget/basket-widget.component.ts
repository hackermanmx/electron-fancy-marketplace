import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'efm-basket-display',
    templateUrl: './basket-widget.component.html',
    styleUrls: ['./basket-widget.component.scss']
})
export class BasketWidgetComponent {
    count$: Observable<number>;

    constructor() {
        this.count$ = of(0);
    }
}

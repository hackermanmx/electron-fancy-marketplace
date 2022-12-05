import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BasketState, ClearBasket, UpdateWalletAmount } from '../store';
import { Select, Store } from '@ngxs/store';

@Component({
    selector: 'efm-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
    @Select(BasketState.basketTotal)
    totalPrice$!: Observable<number>;

    form!: FormGroup;

    get first() {
        return this.form.get('first');
    }

    get last() {
        return this.form.get('last');
    }

    get street() {
        return this.form.get('street');
    }

    get city() {
        return this.form.get('city');
    }

    get state() {
        return this.form.get('state');
    }

    get email() {
        return this.form.get('email');
    }

    constructor(private router: Router, private store: Store) {}

    ngOnInit() {
        this.form = new FormGroup({
            first: new FormControl(null, Validators.required),
            last: new FormControl(null, Validators.required),
            street: new FormControl(null, Validators.required),
            city: new FormControl(null, Validators.required),
            state: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.required, Validators.email])
        });
    }

    onFormSubmit() {
        this.store.dispatch(new UpdateWalletAmount());
        this.store.dispatch(new ClearBasket());
        this.router.navigate(['/confirmation']);
    }
}

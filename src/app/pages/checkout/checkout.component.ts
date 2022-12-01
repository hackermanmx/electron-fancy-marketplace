import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'efm-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
    form!: FormGroup;
    totalPrice$!: Observable<number>;

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

    constructor(private router: Router) {}

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
        this.router.navigate(['/checkout/confirmation']);
    }
}

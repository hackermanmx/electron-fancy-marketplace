import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    private readonly STORED_TOKEN = 'EFM_TOKEN';

    get token() {
        return localStorage.getItem(this.STORED_TOKEN) || '';
    }

    set token(token: string) {
        localStorage.setItem(this.STORED_TOKEN, token);
    }

    constructor(private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            }
        });

        return next.handle(request).pipe(
            catchError((err) => {
                if (err.status === 401 || err.status === 403) {
                    this.handleAuthError();
                    return of(err);
                }
                throw err;
            })
        );
    }

    private handleAuthError() {
        this.logout();
        this.router.navigate(['/login']);
    }

    private logout() {
        localStorage.clear();
    }
}

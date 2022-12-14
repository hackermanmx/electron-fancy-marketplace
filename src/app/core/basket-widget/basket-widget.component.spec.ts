import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketWidgetComponent } from './basket-widget.component';

describe('BasketComponent', () => {
    let component: BasketWidgetComponent;
    let fixture: ComponentFixture<BasketWidgetComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BasketWidgetComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(BasketWidgetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

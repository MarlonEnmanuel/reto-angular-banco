import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreateComponent } from './product-create.component';
import { ProductsApiMocker } from '../../services/products-api.mocks';
import { ProductsApiService } from '../../services/products-api.service';
import { Router } from '@angular/router';

describe('ProductCreateComponent', () => {
    let component: ProductCreateComponent;
    let fixture: ComponentFixture<ProductCreateComponent>;
    let apiMocker: ProductsApiMocker;
    let routerSpy: any;

    beforeEach(async () => {
        apiMocker = new ProductsApiMocker();
        routerSpy = jasmine.createSpyObj('Router', ['navigate']);

        await TestBed.configureTestingModule({
            imports: [ProductCreateComponent],
            providers: [
                { provide: Router, useValue: routerSpy },
                { provide: ProductsApiService, useValue: apiMocker.spy },
            ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(ProductCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

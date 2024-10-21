import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsPageComponent } from './products-page.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { ConfirmationModalComponent } from '../../components/confirmation-modal/confirmation-modal.component';
import { ProductsApiMocker } from '../../services/products-api.mocks';
import { ProductsApiService } from '../../services/products-api.service';

describe('ProductsPageComponent', () => {
    let component: ProductsPageComponent;
    let fixture: ComponentFixture<ProductsPageComponent>;
    let apiMocker: ProductsApiMocker;

    beforeEach(async () => {
        apiMocker = new ProductsApiMocker();

        await TestBed.configureTestingModule({
            imports: [
                ProductsPageComponent,
                ProductListComponent,
                ReactiveFormsModule,
                ConfirmationModalComponent,
            ],
            providers: [
                provideRouter([]),
                { provide: ProductsApiService, useValue: apiMocker.spy },
            ]
        })
        .compileComponents();

        apiMocker.mockGetProducts();
        fixture = TestBed.createComponent(ProductsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

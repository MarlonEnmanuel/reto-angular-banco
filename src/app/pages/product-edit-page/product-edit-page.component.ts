import { Component, Input, signal } from '@angular/core';
import { ProductFormComponent } from "../../components/product-form/product-form.component";
import { ProductsApiService } from '../../services/products-api.service';
import { ApiStatus, Product } from '../../services/products-api.models';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-edit-page',
    standalone: true,
    imports: [ProductFormComponent],
    templateUrl: './product-edit-page.component.html',
    styleUrl: './product-edit-page.component.scss'
})
export class ProductEditPageComponent {

    @Input({required:true})
    public productId!:string;

    public product = signal<Product|undefined>(undefined);

    public status = signal<ApiStatus>('initial');

    constructor(
        private productsApiService: ProductsApiService,
        public router: Router
    ) { }

    ngOnInit() {
        this.fetchProduct();
    }

    private fetchProduct() {
        this.status.set('loading');
        this.productsApiService.getProduct(this.productId).subscribe({
            next: (product) => {
                this.product.set(product);
                this.status.set('success');
            },
            error: (error) => {
                console.error(error);
                this.status.set('error');
            }
        });
    }

    public handleSendProduct(product: Product) {
        this.status.set('loading');
        this.productsApiService.editProduct(product).subscribe({
            next: () => {
                this.status.set('success');
                this.router.navigate(['/products']);
            },
            error: (error) => {
                console.error(error);
                this.status.set('error');
            }
        });
    }
}

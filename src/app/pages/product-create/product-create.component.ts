import { Component } from '@angular/core';
import { ProductsApiService } from '../../services/products-api.service';
import { Router } from '@angular/router';
import { ProductFormComponent } from "../../components/product-form/product-form.component";
import { Product } from '../../services/products-api.models';

@Component({
    selector: 'app-product-create',
    standalone: true,
    imports: [ProductFormComponent],
    templateUrl: './product-create.component.html',
    styleUrl: './product-create.component.scss'
})
export class ProductCreateComponent {

    constructor(
        private productsApiService: ProductsApiService,
        private router: Router
    ) { }

    public handleSendProduct(product: Product) {
        this.productsApiService.createProduct(product).subscribe({
            next: () => {
                this.router.navigate(['/products']);
            },
            error: (error) => {
                console.error(error);
            }
        });
    }
}

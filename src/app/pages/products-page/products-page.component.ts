import { Component, signal } from '@angular/core';
import { ProductsApiService } from '../../services/products-api.service';
import { Product } from '../../services/products-api.models';
import { ProductListComponent } from "../../components/product-list/product-list.component";

@Component({
    selector: 'app-products-page',
    standalone: true,
    imports: [ProductListComponent],
    templateUrl: './products-page.component.html',
    styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent {

    public products = signal<Product[]>([]);
    
    constructor(
        private productsApiService: ProductsApiService
    ) {}

    ngOnInit() {
       this.getProducts();
    }

    private getProducts() {
        this.productsApiService.getProducts().subscribe((resp) => {
            this.products.set(resp.data);
        });
    }
}

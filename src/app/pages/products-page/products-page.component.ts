import { Component, computed, signal } from '@angular/core';
import { ProductsApiService } from '../../services/products-api.service';
import { Product } from '../../services/products-api.models';
import { ProductListComponent } from "../../components/product-list/product-list.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-products-page',
    standalone: true,
    imports: [
        ProductListComponent,
        ReactiveFormsModule,
    ],
    templateUrl: './products-page.component.html',
    styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent {

    private products = signal<Product[]>([]);

    public search = signal<string>('');

    public filteredProducts = computed(() => {
        const products = this.products();
        const search = this.search().trim();
        return products.filter((product) =>
            product.name.toLowerCase().includes(search) ||
            product.description.toLowerCase().includes(search) ||
            product.date_release.toLowerCase().includes(search) ||
            product.date_revision.toLowerCase().includes(search)
        );
    });

    public searchInput = new FormControl<string>('', { nonNullable: true });
    
    constructor(
        private productsApiService: ProductsApiService,
        public router: Router
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

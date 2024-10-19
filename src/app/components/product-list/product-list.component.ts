import { Component, Input } from '@angular/core';
import { Product } from '../../services/products-api.models';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

    @Input({ required: true })
    public products!:Product[];
}

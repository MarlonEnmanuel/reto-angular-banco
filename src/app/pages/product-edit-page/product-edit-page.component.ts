import { Component } from '@angular/core';
import { ProductFormComponent } from "../../components/product-form/product-form.component";

@Component({
    selector: 'app-product-edit-page',
    standalone: true,
    imports: [ProductFormComponent],
    templateUrl: './product-edit-page.component.html',
    styleUrl: './product-edit-page.component.scss'
})
export class ProductEditPageComponent {

}

import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductEditPageComponent } from './pages/product-edit-page/product-edit-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'products',
                pathMatch: 'full',
            },
            {
                path: 'products',
                component: ProductsPageComponent
            },
            {
                path: 'products/new',
                component: ProductEditPageComponent
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];

import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductCreateComponent } from './pages/product-create/product-create.component';

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
                path: 'products/create',
                component: ProductCreateComponent
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];

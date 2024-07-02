import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books.component';

const routes: Routes = [
  {
    path: '', component: BooksComponent, children: [
      { path: '', redirectTo: 'Landing', pathMatch: 'full' },
      { path: 'Landing', loadChildren: () => import('./Modules/books-landing/books-landing.module').then(m => m.BooksLandingModule) },
      { path: 'Products', loadChildren: () => import('./Modules/products/products.module').then(m => m.ProductsModule) },
      { path: 'Cart', loadChildren: () => import('./Modules/cart/cart.module').then(m => m.CartModule) }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }

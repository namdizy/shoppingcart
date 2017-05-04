/**
 * Created by Theodore on 5/2/2017.
 */

import { Routes } from '@angular/router';

import { ProductsListComponent } from './components/productList/productList.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/productDetails/productDetails.component';


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductDetailsComponent}
];

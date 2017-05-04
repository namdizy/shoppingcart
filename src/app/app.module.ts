import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/productList/productList.component';
import { ProductDetailsComponent } from './components/productDetails/productDetails.component';
import { CartComponent } from './components/cart/cart.component';

import { ProductsService } from './providers/services/products.service';
import { CartService } from './providers/services/cart.service';

import { CustomMaterialModule } from './customMaterial.module';

import { rootRouterConfig } from './app.routes';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [ProductsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

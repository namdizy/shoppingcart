/**
 * Created by Theodore on 5/3/2017.
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductsService } from '../../providers/services/products.service';
import { CartService } from '../../providers/services/cart.service';

@Component({
  selector: 'sc-product-list',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css']
})
export class ProductsListComponent implements OnInit {
  productsList: any;
  constructor( public productsService: ProductsService, private cartService: CartService, private route: Router) {}
  ngOnInit() {

    this.productsService.getProductsList().subscribe(data => {
      this.productsList = data;
      console.log(this.productsList);
    });
  }
  addToCart(product) {
    product.status = 'in cart';
    this.productsService.updateProductsList(product).subscribe(data => {});
    this.cartService.updateCart(product).subscribe(data => {});
  }
  removeFromCart(product) {
    product.status = 'in list';
    this.productsService.updateProductsList(product).subscribe(data => {});
    this.cartService.removeFromCart(product).subscribe(data => {});
  }
  goToDetailsPage(id) {
    this.route.navigate(['/product' + id]);
  }
}


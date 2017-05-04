/**
 * Created by Nnamdi on 5/2/2017.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import construct = Reflect.construct;

import { ProductsService } from '../../providers/services/products.service';
import { CartService } from '../../providers/services/cart.service';

@Component({
  selector: 'sc-product-details',
  templateUrl: './productDetails.component.html',
  styleUrls: ['./productDetails.component.css']
})

export class ProductDetailsComponent implements OnInit {
  id: string;
  productsList: any;
  product: any;
  constructor(private route: ActivatedRoute, private productsService: ProductsService, private cartService: CartService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.productsService.getProductsList().subscribe(data => {
      this.productsList = data;
      for ( let i = 0; i < this.productsList.length; i++) {
        if ( this.id === this.productsList[i].id) {
          this.product = this.productsList[i];
        }
      }
      console.log(this.product);
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
}

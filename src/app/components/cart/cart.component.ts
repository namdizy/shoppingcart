/**
 * Created by Theodore on 5/3/2017.
 */

import { Component, OnInit } from '@angular/core';
import { CartService } from '../../providers/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sc-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  constructor(private cartService: CartService, private router: Router) {}
  ngOnInit() {
   this.cartService.getCart().subscribe(data => {
    this.cart = data;
   });
  }
  checkOut() {
    const length = this.cart.length;
    for ( let i = 0; i < length; i++) {
      this.cart[i].status = 'sold out';
    }
    this.cartService.checkOut(this.cart).subscribe(data => {
      this.router.navigate(['/']);
    });
  }
}

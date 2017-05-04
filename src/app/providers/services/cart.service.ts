/**
 * Created by Theodore on 5/2/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CartService {
  constructor(private http: Http) {}

  getCart(): Observable<any> {
    return this.http.get('api/cart').map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
  updateCart(product): Observable<any> {
    return this.http.post('api/cart', product).map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  removeFromCart(product): Observable<any> {
    return this.http.post('api/removeFromCart', product).map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  checkOut(cartList): Observable<any> {
    return this.http.post('api/checkout', cartList).map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


}

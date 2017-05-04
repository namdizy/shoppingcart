/**
 * Created by Theodore on 5/3/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsService {
  constructor(private http: Http) {}

  getProductsList(): Observable<any> {
    return this.http.get('api/productsList').map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
  updateProductsList(product): Observable<any> {
    return this.http.post('api/productsList', product).map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


}


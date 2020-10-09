import { Injectable } from '@angular/core';
import {Product} from './product.model';
import {Subject} from 'rxjs';
import {ProductsService} from './products.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartChanged = new Subject<Product[]>();
  indexChanged = new Subject<Product[]>();

  private productsCart: Product[];
  private productsIndex: Product[];

  constructor(private http: HttpClient) {
    this.http.get('http://127.0.0.1:8000').subscribe((response) => {
      this.productsIndex = response['data'];

      this.indexChanged.next(this.productsIndex.slice());
    });
    this.productsCart = [];
  }

  getIndexProducts(){
    return this.productsIndex.slice();
  }

  getCartProducts(){
    return this.productsCart.slice();
  }

  removeItem(index: number) {
    this.productsIndex.push(this.productsCart[index])
    this.productsCart.splice(index, 1);

    this.cartChanged.next(this.productsCart.slice());
    this.indexChanged.next(this.productsIndex.slice());
  }

  addItem(index: number) {
    this.productsCart.push(this.productsIndex[index]);
    this.productsIndex.splice(index, 1);

    this.cartChanged.next(this.productsCart.slice());
    this.indexChanged.next(this.productsIndex.slice());
  }

}

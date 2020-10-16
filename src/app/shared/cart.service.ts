import { Injectable } from '@angular/core';
import {Product} from './product.model';
import {Subject} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartChanged = new Subject();

  constructor(private http: HttpClient) {}

  getIndexProducts(){
    const cart: string[] = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    let params = new HttpParams();
    params = params.append('cart', cart.join(','));

    console.log(params)

    return this.http.get<Product[]>('http://127.0.0.1:8000/', { params: params });
  }

  getCartProducts(){
    const cart: string[] = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    let params = new HttpParams();
    params = params.append('cart', cart.join(','));

    return this.http.get<Product[]>('http://127.0.0.1:8000/cart', { params: params });
  }

  removeItem(id: string) {
    if (!localStorage.getItem('cart')) {
      return;
    }

    let cart: string[] = JSON.parse(localStorage.getItem('cart'));
    cart.splice(cart.indexOf(id), 1);
    localStorage.setItem('cart', JSON.stringify(cart));

    this.cartChanged.next();
  }

  addItem(id: string) {
    const cart: string[] = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    if (!cart) {
      localStorage.setItem('cart', JSON.stringify([id]));
      return;
    }

    if (cart.includes(id)){
      return;
    }

    cart.push(id);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cartChanged.next();
  }

}

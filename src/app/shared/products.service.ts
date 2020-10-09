import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsCart: Product[] = [];
  private productsIndex: Product[] = [];
  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<{ data: Product[] }>('http://127.0.0.1:8000/products');
  }

}

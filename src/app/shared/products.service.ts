import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>('http://127.0.0.1:8000/products');
  }

  deleteProduct(id: string) {
    return this.http.delete<{ data: Product[] }>('http://127.0.0.1:8000/products/' + id);
  }

  addProduct(title: string, description, price: string, img: File) {
    let updatedData = new FormData();
    updatedData.append('title', title);
    updatedData.append('description', description);
    updatedData.append('price', price);
    updatedData.append('img', img, img.name);

    return this.http.post('http://127.0.0.1:8000/products', updatedData);
  }

  getProduct(id: string) {
    return this.http.get<Product>('http://127.0.0.1:8000/products/' + id);
  }

  updateProduct(id:string, title: string, description, price: string, img: File) {
    let updatedData = new FormData();
    updatedData.append('title', title);
    updatedData.append('description', description);
    updatedData.append('price', price);
    if (img){
      updatedData.append('img', img, img.name);
    }

    return this.http.patch('http://127.0.0.1:8000/products/' + id, updatedData);
  }
}

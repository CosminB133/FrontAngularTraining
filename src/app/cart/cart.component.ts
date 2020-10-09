import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../shared/product.model';
import {CartService} from '../shared/cart.service';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  products: Product[];
  subscription: Subscription;

  constructor(private cartService: CartService,private http:HttpClient) {}

  ngOnInit(): void {
    this.subscription = this.cartService.cartChanged.subscribe(
      (products) => {
        this.products = products
      }
    );

    this.products = this.cartService.getCartProducts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(f) {
    console.log(f)
    this.http.post('http://127.0.0.1:8000/orders', f);
  }
}

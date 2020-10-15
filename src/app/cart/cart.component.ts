import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../shared/product.model';
import {CartService} from '../shared/cart.service';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Order} from '../shared/order.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subscription: Subscription;

  constructor(
    private cartService: CartService,
    private http:HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.cartService.cartChanged.subscribe(
      (response) => {
        this.cartService.getCartProducts().subscribe(response => {
          this.products = response['data'];
        })
      }
    );
    this.cartService.getCartProducts().subscribe(response => {
      this.products = response['data'];
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(input) {
    this.http.post('http://127.0.0.1:8000/orders', {
      name: input.name,
      contact: input.contact,
      comments: input.comments,
      products: JSON.parse(localStorage.getItem('cart'))
    }).subscribe((response) => {
      localStorage.removeItem('cart');
      this.router.navigate(['/']);
    });
  }
}

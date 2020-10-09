import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from '../shared/products.service';
import {Product} from '../shared/product.model';
import {CartService} from '../shared/cart.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {

  products: Product[];
  subscription: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subscription = this.cartService.indexChanged.subscribe(
      (products) => {
        this.products = products
      }
    );

    this.products = this.cartService.getIndexProducts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

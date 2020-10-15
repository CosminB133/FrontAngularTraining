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
    this.cartService.getIndexProducts().subscribe(response =>{
      this.products = response['data'];
    });
    this.subscription = this.cartService.cartChanged.subscribe(() => {
      this.cartService.getIndexProducts().subscribe(response =>{
        this.products = response['data'];
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

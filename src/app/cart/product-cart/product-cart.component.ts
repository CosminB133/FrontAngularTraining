import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../shared/product.model';
import {CartService} from '../../shared/cart.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  @Input() product: Product;
  @Input() index: number;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
  }

  onRemoveItem() {
    this.cartService.removeItem(this.index);
  }
}


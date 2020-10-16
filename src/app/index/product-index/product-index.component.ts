import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductsService} from '../../shared/products.service';
import {Product} from '../../shared/product.model';
import {CartService} from '../../shared/cart.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit {

  @Input() product: Product;
  @Input() index: number;

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  onAddItem() {
    this.cartService.addItem(this.product._id);
  }

}

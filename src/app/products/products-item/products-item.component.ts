import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from '../../shared/product.model';
import {ProductsService} from '../../shared/products.service';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {

  @Input() product: Product;
  @Input() index: number;
  @Output() deletedItem = new EventEmitter();

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}

  onDelete() {
    this.productsService.deleteProduct(this.product.id).subscribe(response => {
      this.deletedItem.emit(this.index);
    })
  }
}

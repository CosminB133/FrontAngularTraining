import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/products.service';
import { Product } from '../shared/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService,
              private router: Router) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(
      response => this.products = response.data ,
      error => this.router.navigate(['/login']));
  }

  onDelete(index: number) {
    this.products.splice(index, 1);
  }
}

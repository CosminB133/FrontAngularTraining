import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../shared/products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.css']
})
export class ProductsNewComponent implements OnInit {

  selectedFile: File;

  constructor(private productsService: ProductsService,
              private router: Router) {}

  ngOnInit(): void {}

  onSubmit(input: any) {
    this.productsService.addProduct(input.title, input.description, input.price, this.selectedFile).subscribe(response => {
      this.router.navigate(['/products']);
    });
  }

  onFileChange(file: any) {
    this.selectedFile = file;
  }
}

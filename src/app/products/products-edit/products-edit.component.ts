import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../shared/products.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
  id: string;
  price: string = "ceva";
  title: string;
  description: string;
  selectedFile: File;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.id = params.id;
        this.productsService.getProduct(this.id).subscribe(response => {
          this.price = response.data.price;
          this.title = response.data.title;
          this.description = response.data.description;
        });
      });
  }

  onSubmit(input: any) {
    this.productsService.updateProduct(this.id, input.title, input.description, input.price, this.selectedFile).subscribe(
      () => this.router.navigate(['/products'])
    );
  }

  onFileChange(file: any) {
    this.selectedFile = file;
  }

}

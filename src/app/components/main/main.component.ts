import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  productList: Product[] = [];
  id?: number;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const cat: string = params['cat'];

      if (cat) {
        this.productsService
          .getProductsByCategory(cat)
          .subscribe((data) => (this.productList = data));
      } else {
        this.productsService
          .getAllProducts()
          .subscribe((data) => (this.productList = data));
      }
    });
  }
}

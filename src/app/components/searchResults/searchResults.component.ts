import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-searchComponent',
  templateUrl: './searchResults.component.html',
  styleUrls: ['./searchResults.component.css'],
})
export class SearchResultsComponent implements OnInit {
  allProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.productsService
        .searchProduct(params['q'])
        .subscribe((resp) => {
          this.allProducts = resp
        });
    });
  }
}

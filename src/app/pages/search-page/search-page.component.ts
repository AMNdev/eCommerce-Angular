import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent {
  public allProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngDoCheck(): void {
    const term: string = this.route.snapshot.params['q'] || '';
    this.allProducts = this.productsService.searchProduct(term);
  }
}

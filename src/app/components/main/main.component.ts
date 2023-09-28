import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements DoCheck {
  allProducts: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngDoCheck(): void {
    const cat: string = this.route.snapshot.params['cat'] || '';

    this.allProducts = cat
      ? this.productsService.getProductsByCategory(cat)
      : this.productsService.getAllProducts();
  }
}

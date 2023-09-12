import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  allProducts: Product[] = [];

  constructor(productsService: ProductsService) {
    this.allProducts = productsService.getAllProducts();
  }
}

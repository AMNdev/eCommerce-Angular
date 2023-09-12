import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent {
  asideProducts: Product[] = [];

  constructor(productsService: ProductsService) {
    for (let i = 0; i < 4; i++) {
      this.asideProducts.push(productsService.getProductById(i + 1));
    }
  }
}

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

  constructor(private productsService: ProductsService,
  ) {
    productsService.lastProductsEmitter.subscribe(
      (products) => (this.asideProducts = products)
    );

    this.fillAside();
  }

  fillAside() {
    for (let i = 0; i < 4; i++) {
      this.productsService.getProductById(i+3)
    }
  }
}


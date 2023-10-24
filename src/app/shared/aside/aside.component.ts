import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit, OnDestroy {
  asideProducts: Product[] = [];
  private asideSubscription?: Subscription;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.asideSubscription = this.productsService.lastProductsEmitter.subscribe(
      (products) => {
        this.asideProducts = products;
      }
    );
    this.fillAside();
  }

  ngOnDestroy(): void {
    console.log('aside unsuscribed')
    this.asideSubscription?.unsubscribe();
  }

  fillAside() {
    this.productsService.sendLastSeen()

    if (this.asideProducts.length > 3) return;

    for (let i = 0; i < 4; i++) {
      const rndIdx = Math.floor(Math.random() * 20);
      this.productsService.getProductById(rndIdx).subscribe();
    }
  }
}

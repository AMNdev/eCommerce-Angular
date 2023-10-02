import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  currentProduct!: Product;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private shoppingCart: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.currentProduct = this.productService.getProductById(params['id']);
    });
  }

  addProduct() {
    this.shoppingCart.addProductToCart(this.currentProduct);
    // TODO: añadir un modal de aviso
  }
}

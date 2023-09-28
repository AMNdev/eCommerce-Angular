import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  currentProduct!: Product;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private shoppingCart: ShoppingCartService,
  ) {}

  ngOnInit(): void {
    const _id : number = this.route.snapshot.params['id'];
    this.currentProduct = this.productService.getProductById(_id)
  }

  addProduct() {
    this.shoppingCart.addProductToCart(this.currentProduct)
    // TODO: añadir un modal de aviso

  }
}

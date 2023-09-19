import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  public cart: Product[] =[];
  constructor(productService: ProductsService) {

    for (let i = 0; i < 4; i++){
      const currentProduct = productService.getProductById((i + 1));
      this.cart.push(currentProduct)

    }


  }

  // TODO: lógica del carrito: productos, cantidades, suma de importes, etc.

  




}

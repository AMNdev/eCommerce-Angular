import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  currentProduct!: Product;

  constructor(productService: ProductsService) {
    this.currentProduct = productService.getProductById(10);


  }

  // TODO: este componente necesita recibir el ID, sea por parametros de la dirección, sea por comunicación entre componentes.
}

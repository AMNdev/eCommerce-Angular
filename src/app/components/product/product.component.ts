import Swal from 'sweetalert2';
import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
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
      this.productService
        .getProductById(params['id'])
        .subscribe((product) => (this.currentProduct = product));
    });
  }

  addProduct() {
    this.shoppingCart.addProductToCart(this.currentProduct);
    Swal.fire({
      icon: 'success',
      title: 'Successfully added to your cart!',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

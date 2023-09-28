import { Component } from '@angular/core';
import { ShoppingCart } from 'src/app/interfaces/shopping-cart.interface';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  public totalProducts: number = 0;
  public totalSum: number = 0;
  public totalNumberOfItems: number = 0;

  public cart: ShoppingCart[] = [];
  constructor(private cartService: ShoppingCartService) {
    this.refreshCart();
  }

  refreshCart() {
    this.cart = this.cartService.getShoppingCart();

    this.totalSum = 0;
    this.totalNumberOfItems = 0;

    this.totalProducts = this.cart.length;

    this.cart.forEach((cartItem) => {
      this.totalNumberOfItems += cartItem.quantity;
      const subTotal = cartItem.product.price * cartItem.quantity;
      this.totalSum += subTotal;
    });
  }

  modifyQuantity() {
    this.cartService.setShoppingCart(this.cart);
    this.checkIfZero();
  }

  checkIfZero() {
    this.cart.forEach((item) => {
      if (item.quantity <= 0) {
        const deleteItem = confirm(`eliminar ${item.product.title}?`);

        if (deleteItem) this.cartService.deleteProductFromCart(item.product);
        else item.quantity = 1;
      }
    });
    this.refreshCart();
  }

  shopNow() {
    this.cart.length != 0
      ? alert('Shopping now... thanks')
      : alert('Nothing to buy!');
    // TODO: redirect to home
  }

  deleteAll() {
    if (confirm('delete all products?')) this.cartService.deleteAllProducts();
    this.refreshCart();
    //  TODO: redirect to home
  }
}

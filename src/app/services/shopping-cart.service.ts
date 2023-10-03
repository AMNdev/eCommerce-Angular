import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingCart } from '../interfaces/shopping-cart.interface';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private shoppingCart: ShoppingCart[];
  public cartLengthEmitter = new EventEmitter<number>();

  constructor() {
    this.shoppingCart =
      JSON.parse(localStorage.getItem('ShoppingCart-eCommerceAngular')!) || [];

    this.refreshCartLength();
  }

  getShoppingCart() {
    return this.shoppingCart;
  }

  setShoppingCart(newCart: ShoppingCart[]) {
    this.shoppingCart = newCart;
    this.cartToLocalStorage();
  }

  addProductToCart(product: Product) {
    const existingElementId = this.shoppingCart.findIndex(
      (el) => el.product.id == product.id
    );
    if (existingElementId >= 0) {
      this.shoppingCart[existingElementId].quantity += 1;
    } else {
      this.shoppingCart.push({ product, quantity: 1 });
    }
    this.cartToLocalStorage();
  }

  deleteProductFromCart(product: Product) {
    const existingElementId = this.shoppingCart.findIndex(
      (el) => el.product.id == product.id
    );
    if (existingElementId >= 0) {
      this.shoppingCart.splice(existingElementId, 1);
    }
    this.cartToLocalStorage();
  }

  deleteAllProducts() {
    this.shoppingCart = [];
    this.cartToLocalStorage();
  }

  private cartToLocalStorage() {
    this.refreshCartLength();

    localStorage.setItem(
      'ShoppingCart-eCommerceAngular',
      JSON.stringify(this.shoppingCart)
    );
  }
  refreshCartLength() {
    this.cartLengthEmitter.emit(this.shoppingCart.length);
  }
}

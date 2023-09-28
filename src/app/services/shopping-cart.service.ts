import { Injectable } from '@angular/core';
import { ShoppingCart } from '../interfaces/shopping-cart.interface';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private shoppingCart: ShoppingCart[];

  constructor() {
    this.shoppingCart =
      JSON.parse(localStorage.getItem('ShoppingCart-eCommerceAngular')!) || [];
  }

  getShoppingCart() {
    return this.shoppingCart;
  }

  setShoppingCart(newCart: ShoppingCart[]) {
    this.shoppingCart = newCart;
    this.cartToLocalStorage()
    console.log(this.shoppingCart)

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
      this.shoppingCart.splice(existingElementId,1)
    }
    this.cartToLocalStorage();
  }

  deleteAllProducts() {
    this.shoppingCart = []
    this.cartToLocalStorage()
    alert('Your shopping chart is empty')
  }

  private cartToLocalStorage() {
    localStorage.setItem(
      'ShoppingCart-eCommerceAngular',
      JSON.stringify(this.shoppingCart)
    );
  }
}

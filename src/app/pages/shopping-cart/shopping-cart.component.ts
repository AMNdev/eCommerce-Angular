import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCart } from 'src/app/interfaces/shopping-cart.interface';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import Swal from 'sweetalert2';

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
  constructor(
    private cartService: ShoppingCartService,
    private router: Router
  ) {
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
        Swal.fire({
          title: `Desea eliminar ${item.product.title} de la lista?`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Eliminar',
          cancelButtonText: 'No, conservar este producto',
        }).then((result) => {
          if (result.isConfirmed) {
            this.cartService.deleteProductFromCart(item.product);
            Swal.fire({
              icon: 'info',
              title: 'Has eliminado el producto de tu lista',
              showConfirmButton: false,
              timer: 1500,
            });
          } else item.quantity = 1;
        });
      }
    });
    this.refreshCart();
  }

  shopNow() {
    this.cart.length != 0
      ? this.goodByeSwal().then(() => this.redirectToHome())
      : this.emptyListSwal().then(() => this.redirectToHome());
  }

  deleteAll() {
    if (this.totalProducts == 0)
      return this.emptyListSwal().then(() => this.redirectToHome());

    Swal.fire({
      title: `Desea eliminar todos los productos?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar todo',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.deleteAllProducts();
        this.refreshCart();
        this.emptyListSwal().then(() => {
          this.redirectToHome();
        });
      }
    });
    return;
  }

  async emptyListSwal() {
    await Swal.fire({
      icon: 'info',
      title: 'Tu lista está vacía',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  redirectToHome() {
    this.router.navigate(['/home']);
  }

  async goodByeSwal() {
    await Swal.fire({
      title: '<strong>¡Gracias por llegar hasta aquí!</strong>',
      icon: 'success',
      html: `
       Código disponible en <a href="https://github.com/AMNdev/eCommerce-Angular" target="_blank" rel="noopener noreferrer">GitHub</a>
      `,
      showCancelButton: true,

      confirmButtonText:
        '<a style="width: 100px;" href="https://www.linkedin.com/in/antoniomarqueznovella/" target="_blank" rel="noopener noreferrer"><strong>¡Contrátame!<strong></a>',
      confirmButtonColor: '#06d61e',
      cancelButtonText:
        '<a style="width: 100px;" href="https://www.linkedin.com/in/antoniomarqueznovella/" target="_blank" rel="noopener noreferrer"><strong>Hire me!<strong></a>',
      cancelButtonColor: '#30a9fb',
    });
  }
}

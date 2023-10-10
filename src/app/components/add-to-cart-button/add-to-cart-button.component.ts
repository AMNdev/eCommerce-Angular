import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.css']
})
export class AddToCartButtonComponent {
  @Output()
    addedProduct= new EventEmitter()
  constructor() { }
  buttonClicked() {
    this.addedProduct.emit()
  }
}

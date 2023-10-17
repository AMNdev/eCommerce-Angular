import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingCartComponent } from './shopping-cart.component';
import { ShopingCartRoutingModule } from './shopping-cart-routing.module';

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    FormsModule,
    ShopingCartRoutingModule
  ],
  exports: [],
  providers: [],
})
export class ShoppingCartModule {}

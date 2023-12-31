import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppingCartComponent } from './shopping-cart.component';

// path: cart
const routes: Routes = [{ path: '', component: ShoppingCartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopingCartRoutingModule {}

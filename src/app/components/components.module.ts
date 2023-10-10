import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UpButtonComponent } from './up-button/up-button.component';
import { AddToCartButtonComponent } from './add-to-cart-button/add-to-cart-button.component';

@NgModule({
  declarations: [
    MainComponent,
    ProductComponent,
    CardComponent,
    UpButtonComponent,
    AddToCartButtonComponent
  ],

  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    CardComponent,
    MainComponent,
    ProductComponent,
    UpButtonComponent
  ],
  providers: [],
})
export class ComponentsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    ProductComponent,
    CardComponent
  ],

  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    CardComponent,
    MainComponent,
    ProductComponent
  ],
  providers: [],
})
export class ComponentsModule {}

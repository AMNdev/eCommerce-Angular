import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponentComponent } from '../components/searchResults/searchResults.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    ProductPageComponent,
    SearchPageComponent,
    SearchComponentComponent,
    ShoppingCartComponent,
    LoginComponent,


  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [],
  providers: [],
})
export class PagesModule {}


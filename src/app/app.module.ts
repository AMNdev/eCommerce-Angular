import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CardComponent } from './components/card/card.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchComponent } from './shared/sub/search/search.component';
import { SearchComponentComponent } from './components/searchResults/searchResults.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    MainComponent,
    ProductComponent,
    ShoppingCartComponent,
    CardComponent,
    ProductPageComponent,
    SearchPageComponent,
    SearchComponentComponent,
  ],
  imports: [SharedModule, FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

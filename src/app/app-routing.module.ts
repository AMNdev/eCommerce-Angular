import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  { path: 'category/:cat', component: HomePageComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'search/:q', component: SearchPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'home', component: HomePageComponent },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from './shared/error404/error404.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';
import { SearchResultsComponent } from './components/searchResults/searchResults.component';

const routes: Routes = [
  {
    path: 'cart',
    loadChildren: () =>
      import('./pages/shopping-cart/shopping-cart.module').then(
        (m) => m.ShoppingCartModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login-page.module').then(
        (m) => m.LoginPageModule),
  },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      { path: 'category/:cat', component: MainComponent },
      { path: 'product/:id', component: ProductComponent },
      { path: 'search/:q', component: SearchResultsComponent },
      { path: '', component: MainComponent },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

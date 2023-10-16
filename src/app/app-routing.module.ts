import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ProductComponent } from './components/product/product.component';
import { MainComponent } from './components/main/main.component';
import { SearchResultsComponent } from './components/searchResults/searchResults.component';
import { Error404Component } from './shared/error404/error404.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: ShoppingCartComponent },
  // { path: 'login', loadChildren: ()=> import('./pages/lazy.module').then(m=> m.LazyModule) },
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

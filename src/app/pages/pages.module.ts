import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ComponentsModule } from '../components/components.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SearchResultsComponent as SearchResultsComponent } from '../components/searchResults/searchResults.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    SearchResultsComponent,
    ShoppingCartComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    ComponentsModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [],
})
export class PagesModule {}


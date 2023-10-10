import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { DarkModeComponent } from './sub/dark-mode/dark-mode.component';
import { SearchComponent } from './sub/search/search.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AsideComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    DarkModeComponent,
    SearchComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    AsideComponent,
    DarkModeComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    SearchComponent,
  ],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AsideComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    MenuComponent
  ]
})
export class SharedModule { }

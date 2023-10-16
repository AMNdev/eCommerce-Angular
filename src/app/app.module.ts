import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    // FormsModule,
    // ReactiveFormsModule,
    PagesModule,
    SharedModule,
    SweetAlert2Module.forRoot(),
  ],

  providers: [{provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}


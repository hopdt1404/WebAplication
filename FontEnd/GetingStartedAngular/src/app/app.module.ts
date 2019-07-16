import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
// import { TemplateComponent } from './template/template.component';
// import { BankAccountComponent } from './bank-account/bank-account.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertComponent,
    // TemplateComponent,
    // BankAccountComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

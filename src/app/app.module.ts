import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { BatchesListComponent } from './batches-list/batches-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigationComponent,
    ProductsListComponent,
    BatchesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

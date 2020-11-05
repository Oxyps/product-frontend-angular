import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { BatchesListComponent } from './batches-list/batches-list.component';
import { CreateBatchFormComponent } from './create-batch-form/create-batch-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigationComponent,
    ProductsListComponent,
    BatchesListComponent,
    CreateBatchFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

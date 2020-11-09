import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { ListProductsComponent } from './product-page/list-products/list-products.component';

import { ListBatchesComponent } from './batch-page/list-batches/list-batches.component';
import { CreateBatchComponent } from './batch-page/create-batch/create-batch.component';

import { TextInputComponent } from './shared/form/text-input/text-input.component';
import { TextAreaInputComponent } from './shared/form/textarea-input/textarea-input.component';
import { NumberInputComponent } from './shared/form/number-input/number-input.component';
import { SelectInputComponent } from './shared/form/select-input/select-input.component';
import { DateInputComponent } from './shared/form/date-input/date-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigationComponent,
    ListProductsComponent,
    ListBatchesComponent,
    CreateBatchComponent,
    TextInputComponent,
    SelectInputComponent,
    DateInputComponent
    TextAreaInputComponent,
    NumberInputComponent,
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { ListProductsComponent } from './pages/product/list/list.component';
import { CreateProductComponent } from './pages/product/create/create.component';
import { ListBatchesComponent } from './pages/batch/list/list.component';
import { CreateBatchComponent } from './pages/batch/create/create.component';
import { TextInputComponent } from './components/form/text-input/text-input.component';
import { TextAreaInputComponent } from './components/form/textarea-input/textarea-input.component';
import { NumberInputComponent } from './components/form/number-input/number-input.component';
import { SelectInputComponent } from './components/form/select-input/select-input.component';
import { DateInputComponent } from './components/form/date-input/date-input.component';
import { EditBatchComponent } from './pages/batch/edit/edit.component';
import { EditProductComponent } from './pages/product/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigationComponent,
    ListProductsComponent,
    CreateProductComponent,
    ListBatchesComponent,
    CreateBatchComponent,
    TextInputComponent,
    TextAreaInputComponent,
    NumberInputComponent,
    SelectInputComponent,
    DateInputComponent,
    EditBatchComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

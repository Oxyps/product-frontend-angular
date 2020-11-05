import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { BatchesListComponent } from './batches-list/batches-list.component';
import { CreateBatchFormComponent } from './create-batch-form/create-batch-form.component';

const routes: Routes = [
  { path: 'products', component: ProductsListComponent },
  { path: 'batches', component: BatchesListComponent },
  { path: 'create', component: CreateBatchFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

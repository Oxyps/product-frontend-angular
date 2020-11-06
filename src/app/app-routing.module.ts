import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProductsComponent } from './product-page/list-products/list-products.component';

import { ListBatchesComponent } from './batch-page/list-batches/list-batches.component';
import { CreateBatchComponent } from './batch-page/create-batch/create-batch.component';

const routes: Routes = [
  { path: 'products', component: ListProductsComponent },

  { path: 'batches', component: ListBatchesComponent },
  { path: 'create-batch', component: CreateBatchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

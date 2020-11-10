import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProductsComponent } from './pages/product/list/list.component';
import { CreateProductComponent } from './pages/product/create/create.component';

import { ListBatchesComponent } from './pages/batch/list/list.component';
import { CreateBatchComponent } from './pages/batch/create/create.component';
import { EditBatchComponent } from './pages/batch/edit/edit.component';

const routes: Routes = [
  { path: 'products', component: ListProductsComponent },
  { path: 'create-product', component: CreateProductComponent },

  { path: 'batches', component: ListBatchesComponent },
  { path: 'create-batch', component: CreateBatchComponent },
  { path: 'edit-batch/:batch_id', component: EditBatchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

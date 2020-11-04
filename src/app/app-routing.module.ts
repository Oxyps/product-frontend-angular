import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { BatchesListComponent } from './batches-list/batches-list.component';

const routes: Routes = [
  { path: 'products', component: ProductsListComponent },
  { path: 'batches', component: BatchesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

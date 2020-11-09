import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { ApiResponseProducts } from '../../models/api-response-products';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (response: ApiResponseProducts) => {
        this.products = response.results;
      }
    );
  }

}

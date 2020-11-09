import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Product } from '../models/product';
import { ApiResponseProducts } from '../models/api-response-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://127.0.0.1:8000/products';

  // headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // HttpClient injection
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ApiResponseProducts> {
    return this.httpClient.get<ApiResponseProducts>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
    ;
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
    ;
  }

  saveProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.url, JSON.stringify(product), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
    ;
  }

  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.url + '/' + product.id, JSON.stringify(product), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    ;
  }

  deleteProduct(product: Product) {
    return this.httpClient.delete<Product>(this.url + '/' + product.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    ;
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client side
      errorMessage = error.error.message;
    } else {
      // server side
      errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}

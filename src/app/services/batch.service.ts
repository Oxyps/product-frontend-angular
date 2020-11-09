import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Batch } from '../models/batch';
import { ApiResponseBatches } from '../models/api-response-batches';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  url = 'http://127.0.0.1:8000/batches';

  // headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // HttpClient injection
  constructor(private httpClient: HttpClient) { }

  getBatches(): Observable<ApiResponseBatches> {
    return this.httpClient.get<ApiResponseBatches>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
    ;
  }

  getBatchById(id: number): Observable<Batch> {
    return this.httpClient.get<Batch>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
    ;
  }

  saveBatch(batch: Batch): Observable<Batch> {
    return this.httpClient.post<Batch>(this.url, JSON.stringify(batch), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
    ;
  }

  updateBatch(batch: Batch): Observable<Batch> {
    return this.httpClient.put<Batch>(this.url + '/' + batch.id, JSON.stringify(batch), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    ;
  }

  deleteBatch(batch: Batch) {
    return this.httpClient.delete<Batch>(this.url + '/' + batch.id, this.httpOptions)
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

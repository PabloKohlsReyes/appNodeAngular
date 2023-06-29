import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from  '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators'


import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private REST_API: string = 'http://localhost:5000/api/v1/products'
  httpHeaders = new HttpHeaders().set('Content-type','application/json');

  constructor(private httpClient: HttpClient) { }
 
  getProducts():Observable<any>{
    return this.httpClient.get(`${this.REST_API}`, {headers: this.httpHeaders})
  }
  getProduct(id:any):Observable<any>{
    return this.httpClient.get(`${this.REST_API}/${id}`, {headers: this.httpHeaders}).pipe(map((res:any)=>{
      return res || {}
    }))
  }
  createProducts(data:Product):Observable<any>{
    return this.httpClient.post(`${this.REST_API}`,data, {headers: this.httpHeaders}).pipe(catchError(this.handleError))
  }
  updateProduct(id:any,data:any):Observable<any>{    
    return this.httpClient.put(`${this.REST_API}/${id}`,data, {headers: this.httpHeaders}).pipe(catchError(this.handleError))
  }

deleteProduct(id:any):Observable<any>{
  return this.httpClient.delete(`${this.REST_API}/${id}`, {headers: this.httpHeaders}).pipe(catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
    let errorMsg = ''
    if (error.error instanceof ErrorEvent) {
      errorMsg = error.error.message
    }else{
      errorMsg = `ErrorCode: ${error.status}. Message: ${error.message}`
    }
    return throwError(()=>{
      errorMsg
    })

  }
}

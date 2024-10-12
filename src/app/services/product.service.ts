import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  url_base = "http://localhost:8080"

  getProductByBranch(branchId: String): Observable<any>{
    return this.http.get(`${this.url_base}/product/${branchId}/products`)
  }

  subscribeProduct(body: any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.url_base}/subscription`, body, {headers})
  }

  getAllProductsSuscribed(clientId: any): Observable<any>{
    return this.http.get(`${this.url_base}/subscription/${clientId}`)
  }

  getProductById(productId: any): Observable<any>{
    return this.http.get(`${this.url_base}/product/${productId}`)
  }

}

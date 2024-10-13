import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  url_base = environment.apiUrl;

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

  deleteSubscriptionById(id: any): Observable<any>{
    return this.http.delete(`${this.url_base}/subscription/deactivate/${id}`)
  }

  getProductById(productId: any): Observable<any>{
    return this.http.get(`${this.url_base}/product/${productId}`)
  }

  getTransactionsByClient(clientId: any){
    return this.http.get(`${this.url_base}/transaction-history/${clientId}`)
  }

}

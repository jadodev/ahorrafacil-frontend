import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  url_base = "http://localhost:8080"

  getProductByBranch(branchId: String): any{
    return this.http.get(`${this.url_base}/product/${branchId}/products`)
  }

}

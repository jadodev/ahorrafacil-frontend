import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BranchService {

  constructor(private http: HttpClient) { }
  url_base = "http://localhost:8080"

  getAllBranches(): any{
    return this.http.get(`${this.url_base}/branch/all`)
  }

}

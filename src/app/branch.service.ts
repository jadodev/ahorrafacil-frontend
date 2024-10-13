import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroment';

@Injectable({
  providedIn: 'root'
})

export class BranchService {

  constructor(private http: HttpClient) { }
  url_base = environment.apiUrl;

  getAllBranches(): any{
    return this.http.get(`${this.url_base}/branch/all`)
  }

}

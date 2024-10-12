import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private http: HttpClient) { }

  getClientById(id: string): any{
    return this.http.get(`http://localhost:8080/client/cc/${id}`)
  }


}

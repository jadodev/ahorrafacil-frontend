import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  url_base = "http://localhost:8080"

  getClientById(id: string): any{
    return this.http.get(`${this.url_base}/client/cc/${id}`)
  }

  updateUser(id: string, body: any): any{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.url_base}/client/${id}`, body, {headers})
  }

}

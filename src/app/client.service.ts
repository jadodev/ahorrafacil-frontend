import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../enviroment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  url_base = environment.apiUrl;

  getClientById(id: string): any{
    return this.http.get(`${this.url_base}/client/cc/${id}`)
  }

  updateUser(id: string, body: any): any{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.url_base}/client/${id}`, body, {headers})
  }

}

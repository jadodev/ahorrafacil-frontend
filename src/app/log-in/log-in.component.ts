import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterModule],
  providers: [CookieService],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export  default class LogInComponent {

  constructor(
    private clientService: ClientService,
    private router: Router,
    private cookieService: CookieService
  ){}

  identificationValue = "1234567890"

  getClientById(){
    this.clientService.getClientById(this.identificationValue)
    .subscribe((response: any) => { 
      this.cookieService.set('userDetails', JSON.stringify(response));
      if (!response.email || !response.phone) {
        this.router.navigate([`/user/${this.identificationValue}`]); 
      } else {
        this.router.navigate(["/"]);  
      }
    });

  }

}

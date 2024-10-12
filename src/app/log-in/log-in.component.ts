import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export  default class LogInComponent {

  constructor(
    private clientService: ClientService,
    private router: Router
  ){}

  identificationValue = "1234567890"

  getClientById(){
    this.clientService.getClientById(this.identificationValue)
    .subscribe((response: any) => { 
      if (!response.email || !response.phone) {
      this.router.navigate([`/user/${this.identificationValue}`]); 
    } else {
      this.router.navigate(["/"]);  
    }
  });
  }

}

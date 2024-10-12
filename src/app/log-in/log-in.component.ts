import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { BranchService } from "../branch.service"

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export  default class LogInComponent {

  constructor(
    private branchService: BranchService,
    private router: Router
  ){}

  identificationValue = "1234567890"

  getClientById(){
    this.branchService.getClientById(this.identificationValue)
    .subscribe((response: any) => { 
      if (!response.email || !response.phone) {
        console.log("1")
      this.router.navigate(["/user"]); 
    } else {
      console.log("2")

      this.router.navigate(["/"]);  
    }
  });
  }

}

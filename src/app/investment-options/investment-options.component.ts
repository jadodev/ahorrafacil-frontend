import { Component, OnInit } from '@angular/core';
import { LocationDropdownComponent } from '../location-dropdown/location-dropdown.component';
import { BranchService } from '../branch.service';

@Component({
  selector: 'app-investment-options',
  standalone: true,
  imports: [LocationDropdownComponent],
  templateUrl: './investment-options.component.html',
  styleUrl: './investment-options.component.css'
})
export class InvestmentOptionsComponent implements OnInit{

  constructor(private branchService: BranchService){}
  branches:any = []

  ngOnInit(): void {
    this.getAllBranches()
  }

  getAllBranches(){
    this.branchService.getAllBranches()
    .subscribe(
      (response: any) => {
        this.branches = response;
      },
      (error: any) => {
        console.error('Error updating profile', error);
      }
    )
  }
  
}

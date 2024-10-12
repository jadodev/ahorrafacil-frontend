import { Component } from '@angular/core';
import { LocationDropdownComponent } from '../location-dropdown/location-dropdown.component';

@Component({
  selector: 'app-investment-options',
  standalone: true,
  imports: [LocationDropdownComponent],
  templateUrl: './investment-options.component.html',
  styleUrl: './investment-options.component.css'
})
export class InvestmentOptionsComponent {
  
}

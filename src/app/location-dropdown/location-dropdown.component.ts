import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-dropdown',
  standalone: true,
  templateUrl: './location-dropdown.component.html',
  styleUrls: ['./location-dropdown.component.css'],
  imports: [CommonModule]
})
export class LocationDropdownComponent {
  @Input() branches: any[] = [];

}
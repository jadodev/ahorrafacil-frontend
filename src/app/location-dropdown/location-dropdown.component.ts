import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-location-dropdown',
  standalone: true,
  templateUrl: './location-dropdown.component.html',
  styleUrls: ['./location-dropdown.component.css'],
  imports: [CommonModule]
})
export class LocationDropdownComponent {
  @Input() branches: any[] = [];
  @Output() branchSelected = new EventEmitter<any>();

  onBranchChange(selectedBranch: Event) {
    this.branchSelected.emit(selectedBranch); 
  }

}
import { Component } from '@angular/core';
import randomColor from 'randomcolor';

@Component({
  selector: 'app-account-movements',
  standalone: true,
  imports: [],
  templateUrl: './account-movements.component.html',
  styleUrl: './account-movements.component.css'
})
export class AccountMovementsComponent {
  profileColor: string;

  constructor() {
    this.profileColor = randomColor();
  }
}
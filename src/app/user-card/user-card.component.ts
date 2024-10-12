import { Component } from '@angular/core';
import randomColor from 'randomcolor';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  profileColor: string;

  constructor() {
    this.profileColor = randomColor();
  }
}

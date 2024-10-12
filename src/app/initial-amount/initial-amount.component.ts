import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-initial-amount',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './initial-amount.component.html',
  styleUrl: './initial-amount.component.css'
})
export class InitialAmountComponent {
  [x: string]: any;
  rangeValue: number = 75000; 

  constructor(private router: Router) {}

  onRangeChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.rangeValue = Number(target.value); 
  }

  showModal() {
    Swal.fire({
      title: '¡Buen trabajo!',
      text: 'Te has inscrito con éxito.',
      icon: 'success',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/contracted']);
      }
    });
  }
}

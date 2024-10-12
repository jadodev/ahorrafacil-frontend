import { Component } from '@angular/core';
import randomColor from 'randomcolor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contracted-services',
  standalone: true,
  imports: [],
  templateUrl: './contracted-services.component.html',
  styleUrl: './contracted-services.component.css'
})
export class ContractedServicesComponent {
  confirmDelete() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '¡Eliminado!',
          text: 'El servicio se ha sido eliminado.',
          icon: 'success'
        });
      }
    });
  }
  profileColor: string;

  constructor() {
    this.profileColor = randomColor();
  }
}

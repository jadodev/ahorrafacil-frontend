import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ProductService } from '../services/product.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-initial-amount',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [CookieService],
  templateUrl: './initial-amount.component.html',
  styleUrl: './initial-amount.component.css'
})
export class InitialAmountComponent {
  [x: string]: any;
  rangeValue: number = 75000; 
  clientId = ""

  constructor(
    private router: Router, 
    private cookieService: CookieService,
    private productService: ProductService
  ) {}

  @Input() product: any;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }


  onRangeChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.rangeValue = Number(target.value); 
  }


  subscribeProduct(){
    let client = JSON.parse(this.cookieService.get("userDetails"))
    this.clientId = client.id
    let productId = this.product.productId
    let subscriptionAmount = this.rangeValue
    let status = "active"
    let body = {
      clientId: this.clientId,
      productId,
      subscriptionAmount,
      subscriptionDate: new Date(),
      status
    }
    this.productService.subscribeProduct(JSON.stringify(body))
    .subscribe(
      (response: any) => this.showModalAndRedirect())
      
  }

  showModalAndRedirect(){
      Swal.fire({
        title: '¡Buen trabajo!',
        text: 'Te has inscrito con éxito.',
        icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate([`/subscription/${this.clientId}`]);
        }
      });
  }
  
}

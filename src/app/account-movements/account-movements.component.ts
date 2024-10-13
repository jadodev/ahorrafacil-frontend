import { Component, OnInit } from '@angular/core';
import randomColor from 'randomcolor';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-movements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-movements.component.html',
  styleUrl: './account-movements.component.css'
})
export class AccountMovementsComponent implements OnInit{
  profileColor: string;
  transactions: any = []

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.profileColor = randomColor();
  }

  ngOnInit(): void {
    this.getTransactionByClient()
  }
  
  getTransactionByClient(){
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getTransactionsByClient(id)
    .subscribe(response => this.transactions = response)
  }
}
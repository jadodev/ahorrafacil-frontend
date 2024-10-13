import { Component, OnInit } from '@angular/core';
import { LocationDropdownComponent } from '../location-dropdown/location-dropdown.component';
import { BranchService } from '../branch.service';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { InitialAmountComponent } from '../initial-amount/initial-amount.component';

@Component({
  selector: 'app-investment-options',
  standalone: true,
  imports: [CommonModule, LocationDropdownComponent, InitialAmountComponent],
  templateUrl: './investment-options.component.html',
  styleUrl: './investment-options.component.css'
})
export class InvestmentOptionsComponent implements OnInit{

  constructor(
    private branchService: BranchService,
    private productService: ProductService
  ){}

  branches:any = []
  products: any[] = []
  selectedProduct: any = {}
  isModalOpen = false;
  defaultBranch: any = {}

  productNameForClient = {
    "FPV_EL CLIENTE_RECAUDADORA": "Ahorro Seguro",
    "FPV_EL CLIENTE_ECOPETROL": "Energético Ecopetrol",
    "DEUDAPRIVADA": "Deuda Privada",
    "FDO-ACCIONES": "Acciones Crecientes",
    "FPV_EL CLIENTE_DINAMICA": "Dinámico de Inversión"
  }

  ngOnInit(): void {
    this.getAllBranches()

  }

  getAllBranches(){
    this.branchService.getAllBranches()
    .subscribe(
      (response: any) => {
        this.branches = response;
        this.defaultBranch = response[0];
        let { id } = this.defaultBranch;
        this.productsByBranch(id)
      },
      (error: any) => {
        console.error('Error updating profile', error);
      }
    )
  }



  productsByBranch(id: any) {
    this.productService.getProductByBranch(id)
    .subscribe(
      (response: any) => {
        this.products = response
        console.log(response)
      }
    )
  }

  getProductNameForClient(name: never){
    return this.productNameForClient[name]
  }

  openModal(product: any) {
    this.selectedProduct = product;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  
}

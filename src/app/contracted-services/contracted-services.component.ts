import { Component } from '@angular/core';
import randomColor from 'randomcolor';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contracted-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contracted-services.component.html',
  styleUrl: './contracted-services.component.css'
})
export class ContractedServicesComponent {

  id: string | null = "";
  profileColor: string | undefined;
  subscriptionsWithProducts: any = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  
  ngOnInit(): void {
    this.profileColor = randomColor();
    this.getSubscriptions()
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getSubscriptions() {
    const id = this.route.snapshot.paramMap.get('id');
    
    // Primera petición para obtener las suscripciones
    this.productService.getAllProductsSuscribed(id).pipe(
      mergeMap((subscriptions: any[]) => {
        if (!subscriptions || subscriptions.length === 0) {
          return []; 
        }

        // Filtrar las suscripciones con status "inactive"
        const activeSubscriptions = subscriptions.filter(sub => sub.status !== 'inactive');
        
        if (activeSubscriptions.length === 0) {
          return []; 
        }

        // Crear un array de peticiones usando `getProductById` solo para suscripciones activas
        const productRequests = activeSubscriptions.map(subscription => 
          this.productService.getProductById(subscription.productId)
        );

        // Utilizar `forkJoin` para ejecutar todas las peticiones en paralelo
        return forkJoin(productRequests).pipe(
          map((products: any[]) => {
            // Combinar suscripciones activas con sus productos correspondientes
            return activeSubscriptions.map((subscription, index) => ({
              ...subscription,
              product: products[index]  
            }));
          })
        );
      })
    ).subscribe(
      (subscriptionsWithProducts: any[]) => {
        // Guardar la combinación de suscripciones con sus productos
        this.subscriptionsWithProducts = subscriptionsWithProducts;
        console.log(this.subscriptionsWithProducts);
      }
    );
  }

  deleteSubscriptionById(id: String){
    this.productService.deleteSubscriptionById(id)
    .subscribe(console.log)
  }

  confirmDelete(id: String) {
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
        this.deleteSubscriptionById(id)
        Swal.fire({
          title: '¡Eliminado!',
          text: 'El servicio se ha sido eliminado.',
          icon: 'success'
        });
        this.getSubscriptions()
      }
    });
  }

}

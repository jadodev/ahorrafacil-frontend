import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ClientService } from '../client.service';
import randomColor from 'randomcolor';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent implements OnInit {
  @ViewChild('particleContainer', { static: true }) particleContainer!: ElementRef;
  profileColor: string;
  userForm: FormGroup;
  userDetails: any

  constructor(
    private fb: FormBuilder, 
    private clientService: ClientService,
    private router: Router
  ) {
    this.profileColor = randomColor();
    this.userForm = this.fb.group({
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  identificationValue = "1234567890"
  buttonLabel = "Guardar"

  ngOnInit(): void {
    this.clientService.getClientById(this.identificationValue).subscribe(
      (userData: { [key: string]: any; }) => {
        this.userDetails = userData;
      },
      (error: any) => {
        console.error('Error fetching user data', error);
      }
    );
  }

  onUpdateProfile(): void {
    let { email, phoneNumber: phone } = this.userForm.value
    let updatedPayload = {
      ...this.userDetails,
      phone,
      email
    }
    if (this.userForm.valid) {
      this.clientService.updateUser(
        this.identificationValue, 
        updatedPayload
      ).subscribe(
        (response: any) => {
          this.router.navigate(["/"]); 
        },
        (error: any) => {
          console.error('Error updating profile', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }


}
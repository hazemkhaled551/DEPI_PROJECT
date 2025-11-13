import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
@Component({
  selector: 'app-booking-form',
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent {
  @Output() formSubmit = new EventEmitter<any>();
  
  bookingForm: FormGroup;
  submitted = false;
  emailMismatchError = false;
  availabilityMessage = '';
  successMessage = '';

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
      date: ['', Validators.required],
      tickets: ['', [Validators.required, Validators.min(1)]],
      message: ['']
    });
  }

  get f() {
    return this.bookingForm.controls;
  }

  checkAvailability() {
    this.availabilityMessage = '';
    
    if (this.bookingForm.get('date')?.invalid) {
      this.availabilityMessage = 'Please select a valid date first!';
      return;
    }
    
    const selectedDate = this.bookingForm.value.date;
    this.availabilityMessage = `Checking availability for ${selectedDate}... Available!`;
    
    setTimeout(() => {
      this.availabilityMessage = '';
    }, 5000);
  }

  onSubmit() {
    this.submitted = true;
    this.emailMismatchError = false;
    this.successMessage = '';

    if (this.bookingForm.invalid) {
      return;
    }

    if (this.bookingForm.value.email !== this.bookingForm.value.confirmEmail) {
      this.emailMismatchError = true;
      return;
    }

    this.formSubmit.emit(this.bookingForm.value);
    this.successMessage = 'Booking submitted successfully! We will contact you soon.';
    
    setTimeout(() => {
      this.bookingForm.reset();
      this.submitted = false;
      this.successMessage = '';
    }, 5000);
  }
}

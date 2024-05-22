import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  accountForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.accountForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.min(0)]],
      employeeCount: ['', Validators.required],
      agreeTerms: [true, Validators.requiredTrue],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.accountForm.invalid) {
      return;
    }

    // Process the form data
    console.log('Form submitted', this.accountForm.value);
  }
}

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  accountForm: FormGroup;
  submitted = false;
  passwordFieldType: string = 'password';

  constructor(private fb: FormBuilder, private router: Router) {
    this.accountForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    debugger;
    this.submitted = true;

    if (this.accountForm.invalid) {
      return;
    }
    console.log('Form submitted', this.accountForm.value);
    this.router.navigate(['/dashboard']);
  }
}

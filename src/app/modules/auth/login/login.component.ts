import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  accountForm: FormGroup;
  submitted = false;
  passwordFieldType: string = 'password';

  constructor(private fb: FormBuilder, private router: Router) {
    this.accountForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/),
        ],
      ],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.accountForm.invalid) {
      return;
    }

    // Process the form data

    console.log('Form submitted', this.accountForm.value);
    this.router.navigate(['/dashboard']);
  }


}

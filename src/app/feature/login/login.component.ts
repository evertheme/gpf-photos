import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

type UserFields = 'email' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  initForm: boolean;
  userForm: FormGroup;
  formErrors: FormErrors = {
    'email': '',
    'password': '',
  };
  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'email': 'Email must be a valid email',
    },
    'password': {
      'required': 'Password is required.',
      'pattern': 'Password must include at least one letter and one number.',
      'minlength': 'Password must be at least 4 characters long.',
      'maxlength': 'Password cannot be more than 24 characters long.',
    },
  };

  constructor(
    public auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }


  ngOnInit() {
    this.buildForm();
  }

  login() {
    this.auth.emailLogin(this.userForm.value['email'], this.userForm.value['password']).then(() => {
      this.router.navigate(['/inventory']);
    });
  }

  buildForm() {
    this.userForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email,
      ]],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9!@#$%^&*]+)$'),
        Validators.minLength(6),
        Validators.maxLength(24),
      ]],
    });

    this.userForm.valueChanges.subscribe((data) => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

  // Updates validation state on form changes.
  onValueChanged(data?: any) {
    if (!this.userForm) { return; }
    if (!this.initForm) {
      console.log('this.userForm.controls: ', this.userForm.controls);
      this.initForm = true;
    }
    const form = this.userForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password')) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          if (control.errors) {
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.call(control.errors, key) ) {
                this.formErrors[field] += `${(messages as {[key: string]: string})[key]} `;
              }
            }
          }
        }
      }
    }
  }
}

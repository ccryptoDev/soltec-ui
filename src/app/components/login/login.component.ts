import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {AuthValidation} from '../../utils/auth-validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  email: string = '';
  password: string = '';

  emailRequired: boolean = false;
  passwordRequired: boolean = false;

  emailFormatError: boolean = false;

  serverError: boolean = false;
  credentialError: boolean = false;

  constructor(private router: Router, private el: ElementRef) {}

  ngAfterViewInit() {

  }

  login() {
    this.emailRequired = this.email.trim() === '';
    this.passwordRequired = this.password.trim() === '';
    // Validation for required
    if (this.emailRequired || this.passwordRequired) {
      return;
    }

    // Validation for email format
    this.emailFormatError = AuthValidation.validateEmail(this.email) === false;
    if (!this.emailFormatError) {
      return;
    }

    if (!this.emailRequired && !this.passwordRequired) {
      this.router.navigate(['/projects']);
    }
  }

  redirectToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  redirectToSignup() {
    this.router.navigate(['/register']);
  }

  social_login() {
    alert('social login');
  }

  emailFormatValidation(email: string) {

  }
}

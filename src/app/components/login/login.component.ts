import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
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

  errorType: string | null = null;
  errorMsg: { [key: string]: { title: string; desc: string } } = {
    'serverErr': {
      'title': 'Error de servidor.',
      'desc': 'Problema al conectar al servidor. Intenta más tarde.'
    },
    'credentialErr': {
      'title': 'Las credenciales son incorrectas.',
      'desc': 'Por favor, revisa las credenciales ingresadas.'
    }
  };

  constructor(private authService: AuthService, private router: Router, private el: ElementRef) {}

  ngAfterViewInit() {

  }

  login() {
    this.emailRequired = this.email.trim() === '';
    this.passwordRequired = this.password.trim() === '';

    // Validation for email format
    this.emailFormatError = AuthValidation.validateEmail(this.email) === false;

    if (!this.emailRequired && !this.passwordRequired) {
      this.authService.login(this.email, this.password).subscribe(
        (response) => {
          const userData = response.body;
          localStorage.setItem('token', userData.token);
        },
        (error) => {
          // handle the errors by response.status
        }
      );
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

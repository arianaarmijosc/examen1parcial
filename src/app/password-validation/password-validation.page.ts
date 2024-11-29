import { Component } from '@angular/core';

@Component({
  selector: 'app-password-validation',
  templateUrl: './password-validation.page.html',
  styleUrls: ['./password-validation.page.scss'],
})
export class PasswordValidationPage {
  password: string = '';  // Contraseña
  confirmPassword: string = '';  // Confirmar contraseña
  passwordMismatch: boolean = false;  // Indica si las contraseñas no coinciden
  passwordMatch: boolean = false;  // Indica si las contraseñas coinciden

  constructor() {}

  // Función para validar las contraseñas
  onSubmit() {
    if (this.password === this.confirmPassword) {
      this.passwordMatch = true;
      this.passwordMismatch = false;
    } else {
      this.passwordMismatch = true;
      this.passwordMatch = false;
    }
  }
}

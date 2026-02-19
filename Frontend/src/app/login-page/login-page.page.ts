import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
  standalone: false
})
export class LoginPagePage implements OnInit {

  email: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
  }

  login() {
    if (!this.email || !this.password) {
      console.warn('Por favor, completa todos los campos.');
      return;
    }
    console.log('Login con:', this.email, this.password);
    // TODO: Implementar la lógica de autenticación con el servicio
  }
}

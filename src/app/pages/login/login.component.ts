import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = '';
  password: string = '';

  constructor() {}


  // TODO: Validar el formulario y conectar con api

  login() {
    console.log('submit', this.email, this.password)
    this.email = '';
    this.password = '';

  }
}

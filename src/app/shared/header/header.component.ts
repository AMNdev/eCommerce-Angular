import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public user?: string;

  constructor(loginService: LoginService) {
    loginService.loggedEmitter.subscribe((isLogged) => {
      this.user = isLogged;
    });
    loginService.emitLoggedUser();
  }
}

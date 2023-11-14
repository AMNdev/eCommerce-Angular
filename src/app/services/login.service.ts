import { Injectable } from '@angular/core';
import { LoginForm } from '../interfaces/login-form.interface';
import { HttpClient } from '@angular/common/http';
import { JSONresponse } from '../interfaces/JSONresponse.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) { }

  private isLogged?: boolean;

  login(formData: LoginForm): Observable<JSONresponse> {
    const url = 'https://fakestoreapi.com/auth/login';

    return this.http.post<JSONresponse>(url, formData);
  }

  setLoggedUser(user: string) {
    this.isLogged = true;
    localStorage.setItem('loggedUser', user);
  }

  removeLoggedUser() {
    this.isLogged = false;
    localStorage.removeItem('loggedUser');
  }
}

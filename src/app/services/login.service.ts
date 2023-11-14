import { EventEmitter, Injectable } from '@angular/core';
import { LoginForm } from '../interfaces/login-form.interface';
import { HttpClient } from '@angular/common/http';
import { JSONresponse } from '../interfaces/JSONresponse.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loggedUser?: string;
  public loggedEmitter = new EventEmitter<string>();

  constructor(private http: HttpClient) {
    this.getLoggedUser()
  }

  login(formData: LoginForm): Observable<JSONresponse> {
    const url = 'https://fakestoreapi.com/auth/login';

    return this.http.post<JSONresponse>(url, formData);
  }

  getLoggedUser() {
    if (!localStorage.getItem('loggedUser')) return;
    this.loggedUser = localStorage.getItem('loggedUser')!;
    this.emitLoggedUser()
  }

  setLoggedUser(user: string) {
    this.loggedUser = user;
    localStorage.setItem('loggedUser', user);
    this.emitLoggedUser();
  }

  removeLoggedUser() {
    this.loggedUser = undefined;
    localStorage.removeItem('loggedUser');
    this.emitLoggedUser();
  }

  emitLoggedUser() {
    this.loggedEmitter.emit(this.loggedUser);
  }
}

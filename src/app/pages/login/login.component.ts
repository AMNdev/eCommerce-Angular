import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';
import Swal from 'sweetalert2';

import { LoginService } from 'src/app/services/login.service';
import { ErrorResponse } from '../../interfaces/JSONresponse.interface';
import { JwtDecodeService } from 'src/app/services/jwt-decode.service';
import { JWT } from 'src/app/interfaces/JWT';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public formSubmitted = false;

  public loginForm = this.fb.group({
    username: ['derek', Validators.required],
    password: ['jklg*_56', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private jwtDecode: JwtDecodeService
  ) {}

  login() {
    this.formSubmitted = true;

    if (this.loginForm.valid) {
      const password = this.loginForm.value.password!;
      const username = this.loginForm.value.username!;
      console.log('post form');
      this.loginService
        .login({ username, password })
        .pipe(
          catchError((err) => {
            console.log(err);
            return of(err);
          })
        )
        .subscribe((resp) => {
          if (resp.token) {
            const user = this.jwtDecode.decodeToken(resp.token).user;

            Swal.fire({
              icon: 'success',
              title: 'Login successful',
              html: `
              Welcome, <b>${user}</b>.
              <br>
              Token: <i>${resp['token']}</i>`,
            });
          } else {
            const errorResponse: ErrorResponse = resp;
            Swal.fire({
              icon: 'error',
              title: `Error ${errorResponse.status}: ${errorResponse.error}`,
              text: errorResponse.message,
            });
          }
        });
    } else {
      console.log('invalid form');
    }
  }

  invalidField(campo: string): boolean {
    if (this.loginForm.get(campo)?.invalid && this.formSubmitted) return true;
    else return false;
  }
}

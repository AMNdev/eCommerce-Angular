import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { JWT } from '../interfaces/JWT';

@Injectable({
  providedIn: 'root'
})
export class JwtDecodeService {

  constructor() { }

  decodeToken(token: string) {
    const user:JWT = JSON.parse(JSON.stringify(jwtDecode(token)));
    return user
  }

}

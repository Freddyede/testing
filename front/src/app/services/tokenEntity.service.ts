import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenEntityService {
  static setToken(newToken: object) {
    // @ts-ignore
    localStorage.setItem('token', JSON.stringify(newToken.token));
  }
}

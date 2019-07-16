import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenEntityService {
  static setToken(newToken: any) {
    localStorage.setItem('token', JSON.stringify(newToken.token));
  }
}

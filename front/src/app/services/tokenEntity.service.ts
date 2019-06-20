import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenEntityService {
  public token = [];
  constructor() { }
  setToken(newToken = []) {
    for (const i = 0; i < newToken.length; i + 1) {
      this.token.push(newToken[i]);
    }
    return this.token;
  }
}

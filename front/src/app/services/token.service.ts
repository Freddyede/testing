import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BACK} from '../constants/back.const';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenString = [];
  constructor(private http: HttpClient) { }
  getToken(obj: object) {
    if (obj) {
      return this.http.post(BACK.url_get + '/token', obj, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
    }
  }
  setTokenString(newToken = []) {
    this.tokenString = newToken;
  }
  getTokenString() {
    return this.tokenString;
  }
}

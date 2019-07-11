import  { Injectable } from '@angular/core';
import { SERVER, ROUTESBACK } from '../constants/back.const';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }
  Login(mail, password) {
    return this.http.post(SERVER.url_get + ROUTESBACK.Authentification.getToken, {mail, password}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  getUsers(mail, password){
    return this.http.post(SERVER.url_get + ROUTESBACK.Authentification.login,  {mail, password}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
  Registration(obj) {
    return this.http.post(SERVER.url_get + ROUTESBACK.Authentification.registration, obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}

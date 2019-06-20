import {Injectable} from '@angular/core';
import {BACK} from '../constants/back.const';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthService {
  private users = '/users';
  constructor(private http: HttpClient) { }
  Login(mail, password) {
    return this.http.post(BACK.url_login, {mail, password}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  Registration(obj) {
    return this.http.post(BACK.urlAPI + this.users, obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}

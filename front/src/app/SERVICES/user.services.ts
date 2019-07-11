import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUsers} from '../COMPONENTS/Interface/IUsers';
import {SERVER, ROUTESBACK} from '../constants/back.const';

@Injectable()
export class UserServices {
  public id: number;
  constructor(private http: HttpClient) {}
  findBy(id, token): Observable <IUsers> {
    return this.http.get<IUsers>(SERVER.urlAPI +  ROUTESBACK.Users.getOneUser + id,  {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization' : token
        })
      });
  }
  putUsers(id,token, newUser) {
    return this.http.put(SERVER.urlAPI + ROUTESBACK.Users.updateUser + id, newUser, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : token
      })
    });
  }
}

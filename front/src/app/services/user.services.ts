import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUsers} from '../Interface/IUsers';
import {BACK} from '../constants/back.const';
import {ROUTES} from '../constants/back.const';

@Injectable()
export class UserServices {
  private urlApi = BACK.urlAPI + '/' + ROUTES.urlUser;
  public id: number;
  constructor(private http: HttpClient) {}
  findBy(id, token): Observable <IUsers> {
    return this.http.get<IUsers>(this.urlApi + '/' + id,  {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization' : token
        })
      });
  }
  putUsers(id,token, newUser) {
    return this.http.put(this.urlApi + '/' + id, newUser, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : token
      })
    });
  }
}

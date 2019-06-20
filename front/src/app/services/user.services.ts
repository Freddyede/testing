import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUsers} from '../Interface/IUsers';
import {BACK} from '../constants/back.const';
import {ROUTES} from '../constants/back.const';

@Injectable()
export class UserServices {
  private urlApi = BACK.urlAPI + '/' + ROUTES.urlUser;
  public id: number;
  constructor(private http: HttpClient) {}
  findBy(id): Observable <IUsers> {
    return this.http.get<IUsers>(this.urlApi + '/' + id);
  }
}

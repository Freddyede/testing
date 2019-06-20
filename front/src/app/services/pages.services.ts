import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPages} from '../Interface/IPages';
import {BACK, ROUTES} from '../constants/back.const';
@Injectable()

export class PagesServices {
  constructor(private http: HttpClient) {}

  getPages(token): Observable <IPages> {
    return this.http.get<IPages>(BACK.urlAPI + ROUTES.urlPages,  {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : token
      })
    });
  }
  getPage(id): Observable <IPages> {
    return this.http.get<IPages>(BACK.urlAPI+ ROUTES.urlPagesModif + id);
  }
}

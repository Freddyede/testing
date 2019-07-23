import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPages } from '../interfaces/IPages';
import { SERVER, ROUTESBACK } from '../constants/back.const';
@Injectable()

export class PagesServices {
  constructor(private http: HttpClient) {}

  getPages(token): Observable <IPages> {
    return this.http.get<IPages>(SERVER.url_get + ROUTESBACK.Pages.getAllPage,  {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : token
      })
    });
  }
  getPage(id,token): Observable <IPages> {
    return this.http.get<IPages>(SERVER.urlAPI+ ROUTESBACK.Pages.getOnePage + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    });
  }
}

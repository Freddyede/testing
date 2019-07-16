import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPages } from '../COMPONENTS/Interface/IPages';
import { SERVER, ROUTESBACK } from '../constants/back.const';
@Injectable()

export class PagesServices {
  constructor(private http: HttpClient) {}

  getPages(): Observable <IPages> {
    return this.http.get<IPages>(SERVER.url_get + ROUTESBACK.Pages.getAllPage,  {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : localStorage.getItem('token')
      })
    });
  }
  getPage(id): Observable <IPages> {
    return this.http.get<IPages>(SERVER.urlAPI+ ROUTESBACK.Pages.getOnePage + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    });
  }
}

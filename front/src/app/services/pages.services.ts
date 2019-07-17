import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
<<<<<<< HEAD:front/src/app/SERVICES/pages.services.ts
import { IPages } from '../INTERFACES/IPages';
import { SERVER, ROUTESBACK } from '../CONSTANTS/back.const';
=======
import { IPages } from '../interfaces/IPages';
import { SERVER, ROUTESBACK } from '../constants/back.const';
>>>>>>> develop:front/src/app/services/pages.services.ts
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

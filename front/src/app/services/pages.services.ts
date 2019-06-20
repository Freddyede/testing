import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPages} from '../Interface/IPages';
@Injectable()

export class PagesServices {
  private url = 'http://localhost:8000/pages';
  private apiUrl = 'http://localhost:8000/api/pages';
  constructor(private http: HttpClient) {}

  getPages(): Observable <IPages> {
    return this.http.get<IPages>(this.url);
  }
  getPage(id): Observable <IPages> {
    return this.http.get<IPages>(this.apiUrl + '/' + id);
  }
}

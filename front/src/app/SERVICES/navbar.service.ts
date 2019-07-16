import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ROUTESBACK, SERVER} from '../CONSTANTS/back.const';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private routesPages = SERVER.url_get+ROUTESBACK.Search.pages;
  constructor(private http: HttpClient) {}
  searchPageByName(obj) {
    return this.http.post(this.routesPages,obj);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ROUTESBACK, SERVER} from '../CONSTANTS/back.const';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  // post(url: string,body: any)
  searchPage(obj) {
    return this.http.post(SERVER.url_get+ROUTESBACK.Search.pages,obj);
  }
}

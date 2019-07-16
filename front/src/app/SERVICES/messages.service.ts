import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ROUTESBACK, SERVER} from '../CONSTANTS/back.const';

@Injectable()

export class MessagesService {
  constructor(private http: HttpClient) { }
  getMessages() {
    return this.http.get(SERVER.url_get+ROUTESBACK.Messages.getMessages);
  }
  postMessages(object,token) {
    return this.http.post(SERVER.url_get+ROUTESBACK.Messages.postMessage,object,{
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization' : token})
    });
  }
}

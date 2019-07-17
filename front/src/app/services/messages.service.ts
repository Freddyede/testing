import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {ROUTESBACK, SERVER} from '../constants/back.const';
@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(private http: HttpClient) { }

  postMessage(idUser,obj,token) {
    return this.http.post(SERVER.urlAPI+ROUTESBACK.Messages.postMessage,obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    })
  }
  findAllMessages(id){
    return this.http.get(SERVER.url_get+ROUTESBACK.Messages.getMessages,{id});
  }
}

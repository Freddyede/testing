import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ROUTESBACK, SERVER } from '../.gitignore/constants/back.const';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(private http: HttpClient) { }

  postMessage(obj) {
    return this.http.post(SERVER.urlAPI+ROUTESBACK.Messages.postMessage,{content: obj.content,users: obj.users}, {
      // @ts-ignore
      headers : new Headers({
        'Content-Type':'application/json',
        'Authorization':obj.token
      })
    });
  }
  findAllMessages(){
    return this.http.get(SERVER.url_get+ROUTESBACK.Messages.getMessages);
  }
}

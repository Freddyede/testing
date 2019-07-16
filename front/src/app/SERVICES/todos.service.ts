import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ROUTESBACK, SERVER } from '../CONSTANTS/back.const';
import {Observable} from 'rxjs';
import {ITodos} from '../INTERFACES/ITODOS';

@Injectable()
export class TodosService {
  constructor(private http: HttpClient) { }

  postTodo(objectTodo) {
    return this.http.post(SERVER.url_get+ROUTESBACK.Todos.postTasks, objectTodo);
  }
  putTodo(objectTodo) {
    return this.http.post(SERVER.url_get + ROUTESBACK.Todos.getTasks, objectTodo);
  }
  findBy(id, token): Observable <ITodos> {
    return this.http.get<ITodos>(SERVER.urlAPI +  ROUTESBACK.Todos.updateTasks + id,  {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : token
      })
    });
  }
  putObject(id,obj,token){
    return this.http.put(SERVER.urlAPI+ROUTESBACK.Todos.updateTasks+id, obj,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : token
      })
    })
  }
  deleteTodos(id,token){
    return this.http.delete(SERVER.urlAPI+ROUTESBACK.Todos.updateTasks+id,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : token
      })
    })
  }
}

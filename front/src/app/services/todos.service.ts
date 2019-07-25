import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ROUTESBACK, SERVER} from '../constants/back.const';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }
  sendNewTask(obj,token){
    return this.http.post(SERVER.urlAPI+ROUTESBACK.Todos.postTodos,obj,{
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':token
      })
    })
  }
  findTodo(id){
    return this.http.get(SERVER.url_get+ROUTESBACK.Todos.getTask+id);
  }
  findAllTodos(obj) {
    return this.http.get(SERVER.url_get+ROUTESBACK.Todos.getTodos+'/'+obj);
  }
  updateTodos(id,obj,token){
    return this.http.put(SERVER.urlAPI+ROUTESBACK.Todos.updateTodos+id,obj,{
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':token
      })
    })
  }
  deleteTodos(id,token){
    return this.http.delete(SERVER.urlAPI+ROUTESBACK.Todos.deleteTodos+id, {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':token
      })
    })
  }
}

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
}

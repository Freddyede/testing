import { Component, OnInit } from '@angular/core';
import {TodosService} from '../../services/todos.service';

@Component({
  providers: [TodosService],
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  privateToken: string;
  newTodos: any = {};
  title: string;
  constructor(private serviceTodos: TodosService) { }

  ngOnInit() {
    this.title = 'Tasks';
    this.privateToken = localStorage.getItem('token');
  }
  sendNewTask(){
    const obj = {
      tasks: this.newTodos.tasks,
      idUser: 'api/users/'+localStorage.getItem('idUser')
    };
    this.serviceTodos.sendNewTask(obj,localStorage.getItem('token')).subscribe();
  }
}

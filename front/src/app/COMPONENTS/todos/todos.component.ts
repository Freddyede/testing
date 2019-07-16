import {Component,  OnInit} from '@angular/core';
import { TodosService } from '../../SERVICES/todos.service';

@Component({
  providers: [TodosService],
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  logged: boolean;
  todosObject: any = {};
  todosData: any;
  titre: string;
  constructor(private todoService: TodosService) { }
  ngOnInit() {
    this.logged = localStorage.getItem('token') !== null;
    const objData = {
      'user': parseInt(localStorage.getItem('idUser'))
    };
    this.todoService.putTodo(objData).subscribe((data)=>{
      this.todosData = data;
    });
    this.titre = 'Todos';
  }
  saveTodos(){
    const objTodo: object = {
      'user':localStorage.getItem('idUser').toString(),
      'tasks':this.todosObject.tasks
    };
    const objData = {
      'user': parseInt(localStorage.getItem('idUser'))
    };
    this.todoService.postTodo(objTodo).subscribe(()=>{
      this.todoService.putTodo(objData).subscribe((data)=>{
        this.todosData = data;
      });
    });
  }
  deleteTodos(id){
    const objData = {
      'user': parseInt(localStorage.getItem('idUser'))
    };
    this.todoService.deleteTodos(id, localStorage.getItem('token')).subscribe(()=>{
      this.todoService.putTodo(objData).subscribe((data)=>{
        this.todosData = data;
      });
    });
  }
}

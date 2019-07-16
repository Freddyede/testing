import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TodosService} from '../../SERVICES/todos.service';
@Component({
  providers:[TodosService],
  selector: 'app-todos-update',
  templateUrl: './todos-update.component.html',
  styleUrls: ['./todos-update.component.scss']
})
export class TodosUpdateComponent implements OnInit {
  private id: number;
  private title='Modification todos';
  private newObjectTodo: object;
  private newUpdateTodos: any = {};
  private logged: boolean;
  constructor(private route: ActivatedRoute, private router:Router, private todoService: TodosService) { }
  ngOnInit() {
    this.id = Number(
      this.route.snapshot.paramMap.get('id')
        .split(',')[1]
        .replace(/]$/, '')
    );
    this.todoService.findBy(this.id,localStorage.getItem('token')).subscribe((data)=>{
      this.newObjectTodo = data;
    });
    this.logged = localStorage.getItem('token') !== null;
  }
  activeUpdate(){
    this.todoService.putObject(this.id,this.newUpdateTodos,localStorage.getItem('token')).subscribe();
    this.router.navigate(['/todos']).then();
  }
}

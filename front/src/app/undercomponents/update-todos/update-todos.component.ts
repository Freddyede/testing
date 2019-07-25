import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TodosService} from '../../services/todos.service';

@Component({
  providers: [TodosService],
  selector: 'app-update-todos',
  templateUrl: './update-todos.component.html',
  styleUrls: ['./update-todos.component.scss']
})
export class UpdateTodosComponent implements OnInit {
  id: number;
  task: any;
  updateTodos: any = {};
  privateToken: string;
  constructor(private router: Router,private route: ActivatedRoute, private TodosService: TodosService) { }

  ngOnInit() {
    this.privateToken = localStorage.getItem('token');
    this.id = Number(
      this.route.snapshot.paramMap.get('id'));
    this.TodosService.findTodo(this.id).subscribe(data=>{
      this.task = data;
    });
  }
  updateTasks(obj){
    this.TodosService.updateTodos(this.id,obj,localStorage.getItem('token')).subscribe(()=> {
      return this.router.navigate(['todos']).then();
    });
  }
}

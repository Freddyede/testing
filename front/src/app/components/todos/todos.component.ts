import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  privateToken: string;
  title: string;
  constructor() { }

  ngOnInit() {
    this.title = 'Todos';
    this.privateToken = localStorage.getItem('token');
  }

}

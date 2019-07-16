import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  logged: boolean;
  title: string;
  constructor() { }

  ngOnInit() {
    this.logged = localStorage.getItem('token') !== null;
    this.title = "Erreur page";
  }

}

import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  logged: boolean;
  constructor() { }
  ngOnInit() {
    this.logged = localStorage.getItem('token') !== null;
  }
}

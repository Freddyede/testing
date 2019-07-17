import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
// TODO(CREATE sendingMessages)
// IN PROGRESS()
// DONE(
//  SET privateToken,titleNavbar,
//  CREATE containerMessages
//  )

export class MessagesComponent implements OnInit {
  privateToken: string;
  title: string;
  constructor() { }

  ngOnInit() {
    this.title = 'Messages';
    this.privateToken = localStorage.getItem('token');

  }

}

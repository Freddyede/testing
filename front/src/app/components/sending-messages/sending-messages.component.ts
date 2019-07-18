import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../../services/messages.service';

@Component({
  providers:[MessagesService],
  selector: 'app-sendingMessages',
  templateUrl: './sending-messages.component.html',
  styleUrls: ['./sending-messages.component.scss']
})
export class SendingMessagesComponent implements OnInit {
  messages: any = {};
  constructor(private MessagesServices: MessagesService) { }
  sendMessage(){
    const obj = {
      users: JSON.stringify(localStorage.getItem('idUser')),
      content: this.messages.content
    };
    this.MessagesServices.postMessage(obj,localStorage.getItem('token')).subscribe();
  }
  ngOnInit() {
  }

}

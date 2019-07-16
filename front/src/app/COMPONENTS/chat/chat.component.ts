import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../../SERVICES/messages.service';
@Component({
  providers:[MessagesService],
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  logged: boolean;
  title: string;
  message = [];
  // Contains valeur utilisateur sendMessage
  objectUser: any;
  objectMessage: any = {};
  constructor(private Chat: MessagesService) { }
  ngOnInit() {
    this.title = "Chat";
    this.logged = localStorage.getItem('token') !== null;
    this.Chat.getMessages().subscribe((data)=> {
      // @ts-ignore
      this.objectUser = data.users;
    });
  }
  sendMessage(){
    let objectMessage: object = {
      'users': parseInt(localStorage.getItem('idUser')),
      'content':this.objectMessage.content
    };
    this.Chat.postMessages(objectMessage,localStorage.getItem('token')).subscribe(()=>{
      this.Chat.getMessages().subscribe((data)=> {
        // @ts-ignore
        this.objectUser = data.users;
      });
      this.objectMessage.content = '';
    });

  }
}

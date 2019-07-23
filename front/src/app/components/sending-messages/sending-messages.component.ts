import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../../services/messages.service';

@Component({
  providers:[MessagesService],
  selector: 'app-sendingMessages',
  templateUrl: './sending-messages.component.html',
  styleUrls: ['./sending-messages.component.scss']
})
export class SendingMessagesComponent implements OnInit {
  messages: any = {};
  arrayMessage: any;
  constructor(private MessagesServices: MessagesService) { }
  sendMessage(){
    const obj = {
      users: 'api/users/'+localStorage.getItem('idUser'),
      content: this.messages.content,
      token: localStorage.getItem('token')
    };
    this.MessagesServices.postMessage(obj).subscribe(()=>{
      this.MessagesServices.findAllMessages().subscribe(()=>{
        this.MessagesServices.findAllMessages().subscribe((data)=>{
          this.arrayMessage = data;
          this.messages.content = '';
        });
      })
    });
  }
  ngOnInit() {
    this.MessagesServices.findAllMessages().subscribe((data)=>{
      this.arrayMessage = data;
    });
  }
}

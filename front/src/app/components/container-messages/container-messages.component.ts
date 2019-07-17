import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../../services/messages.service';

@Component({
  providers:[MessagesService],
  selector: 'app-containerMessages',
  templateUrl: './container-messages.component.html',
  styleUrls: ['./container-messages.component.scss']
})
export class ContainerMessagesComponent implements OnInit {

  constructor(private MessagesService: MessagesService) { }
  arrayMessage: any = [];
  ngOnInit() {
    this.MessagesService.findAllMessages(localStorage.getItem('idUsers')).subscribe((data)=>{
      console.log(data);
      this.arrayMessage.push(data);
   });
  }

}

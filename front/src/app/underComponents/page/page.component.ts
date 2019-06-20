import { Component, Input, OnInit } from '@angular/core';
import {MessageLoginService} from '../../services/message-login.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @Input() pages = [];
  title = 'Pages';
  successMessage: string;
  logged = false;
  constructor(private Message: MessageLoginService) { }
  deleteAlert() {
    this.successMessage = null;
  }
  ngOnInit() {
    this.successMessage = this.Message.getMessage();
    this.logged = localStorage.getItem('token') !== null;
  }
}

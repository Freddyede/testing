import { Component, Input, OnInit } from '@angular/core';
import {MessageLoginService} from '../../services/message-login.service';
import {PagesServices} from '../../services/pages.services';
@Component({
  providers:[PagesServices],
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @Input() pages: object;
  title = 'Pages';
  successMessage: string;
  logged = false;
  constructor(private Message: MessageLoginService, private pageService: PagesServices) { }
  deleteAlert() {
    this.successMessage = null;
    this.successMessage = null;
  }
  ngOnInit() {
    this.logged = true;
    this.pageService.getPages().subscribe(data => this.pages = data);
    setTimeout(() => {
      this.successMessage = null;
      this.successMessage = null;
    }, 5000);
    this.successMessage = this.Message.getMessage();
    this.logged = localStorage.getItem('token') !== null;
  }
}

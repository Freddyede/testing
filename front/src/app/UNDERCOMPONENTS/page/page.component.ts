import { Component, Input, OnInit } from '@angular/core';
import {PagesServices} from '../../SERVICES/pages.services';
@Component({
  providers:[PagesServices],
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Input() pages: object;
  successMessage: string;
  logged = false;
  constructor(private pageService: PagesServices) { }
  ngOnInit() {
    this.logged = true;
    this.pageService.getPages().subscribe(data => this.pages = data);
    setTimeout(() => {
      this.successMessage = null;
      this.successMessage = null;
    }, 5000);
    this.logged = localStorage.getItem('token') !== null;
  }
}

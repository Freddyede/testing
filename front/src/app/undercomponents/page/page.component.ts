import { Component, Input, OnInit } from '@angular/core';
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
  logged = false;
  constructor(private pageService: PagesServices) { }
  ngOnInit() {
    this.logged = true;
    this.pageService.getPages().subscribe(data => this.pages = data);
    this.logged = localStorage.getItem('token') !== null;
  }
}

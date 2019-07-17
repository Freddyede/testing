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
    this.pageService.getPages().subscribe((data) => {
      for (let i = 0; i < data.length; i++){
        if (!data[i].images.startsWith('https://')){
          data[i].images = 'https://img-0.journaldunet.com/YY8e7EtrRfdIfec9XwoXRcVylTI=/1280x/smart/67f08fc7bfa04fedbb78badd1df132b5/ccmcms-jdn/11048473.jpg';
        }
      }
      this.pages = data;
    });
    this.logged = localStorage.getItem('token') !== null;
  }
}

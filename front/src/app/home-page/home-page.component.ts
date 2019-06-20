import {Component, OnInit} from '@angular/core';
import {PagesServices} from '../services/pages.services';

@Component({
  providers: [PagesServices],
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private PagesService: PagesServices) {
  }
  title = 'Pages';
  pages = [];
  sawPage = false;
  ngOnInit() {
    this.PagesService.getPages().subscribe((data) => {
      let i = 0;
      while (i < data.length) {
        this.pages.push(data[i]);
        i++;
      }
    });
    this.sawPage = localStorage.getItem('token') !== null;
  }
}

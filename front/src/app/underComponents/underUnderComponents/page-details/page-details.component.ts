import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PagesServices} from '../../../services/pages.services';

@Component({
  providers: [PagesServices],
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.css']
})
export class PageDetailsComponent implements OnInit {
  id: number;
  objectPage;
  title;
  logged: false;
  constructor(private route: ActivatedRoute, private pageService: PagesServices) { }
  ngOnInit() {
    this.id = Number(
      this.route.snapshot.paramMap.get('id')
        .split(',')[1]
        .replace(/]$/, '')
    );
    this.pageService.getPage(this.id).subscribe(data => this.objectPage = data);
    this.title = 'Page' + this.id;
    // @ts-ignore
    this.logged = localStorage.getItem('token') !== null;
  }
}

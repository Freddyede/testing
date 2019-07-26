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
  objectPage: object;
  title;
  logged: false;
  constructor(private route: ActivatedRoute, private pageService: PagesServices) { }
  ngOnInit() {
    this.id = Number(
      this.route.snapshot.paramMap.get('id'));
    this.pageService.getPage(this.id,localStorage.getItem('token')).subscribe((data) => {
       if (!data.images.startsWith('https://')){
        data.images = 'https://img-0.journaldunet.com/YY8e7EtrRfdIfec9XwoXRcVylTI=/1280x/smart/67f08fc7bfa04fedbb78badd1df132b5/ccmcms-jdn/11048473.jpg';
       }
       if (data.hyperLink.startsWith('https://')){
         this.objectPage = data;
       }else{
         this.objectPage = {
           titre: data.titre,
           images: data.images,
           content: data.content,
           hyperLink: 'https://www.google.fr/search?q='+data.hyperLink+'&safe=active',
           hyperLinkContent: data.hyperLinkContent
         };
       }
    });
    this.title = 'Page' + this.id;
    // @ts-ignore
    this.logged = localStorage.getItem('token') !== null;
  }
}

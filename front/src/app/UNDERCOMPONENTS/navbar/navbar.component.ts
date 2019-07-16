import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NavbarService} from '../../SERVICES/navbar.service';

@Component({
  providers: [NavbarService],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() titreNavbar: string;
  @Input() logged: boolean;
  @Input() login: boolean;
  @Input() active: string;
  token: string;
  userId: number;
  affichePages: boolean;
  afficheLogin: boolean;
  afficheLogout: boolean;
  // Active Search
  activeSearchPages: boolean;
  activeSearchAccueil: boolean;
  // Object for searching
  searchObjectPages: any = {};
  searchObjectAccueil: any = {};
  constructor(private router: Router, private serviceNavbar: NavbarService) { }
  // Methods active Search
  activeSearchComponentPages(){
    this.activeSearchPages = true;
  }
  activeSearchComponentAccueil(){
    this.activeSearchAccueil = true;
  }
  ngOnInit() {
    if (localStorage.getItem('token') !== null) {
      this.afficheLogin = false;
      this.afficheLogout = true;
    } else {
      this.afficheLogout = false;
      this.afficheLogin = true;
    }
    this.affichePages = this.router.url === '/';
  }
  getToken() {
    this.token = localStorage.getItem('token');
    this.userId = Number(this.token);
  }
  desactiveToken() {
    localStorage.removeItem('token');
    this.router.navigate(['..']).then();
  }
  searchPages(){
    if (this.searchObjectPages.name){
      this.serviceNavbar.searchPageByName(this.searchObjectPages);
      this.activeSearchPages = false;
      this.searchObjectPages.name = '';
    }else{
      this.activeSearchComponentPages();
    }
  }
  searchAccueil(){
    if (this.searchObjectAccueil.component !== ""){
      this.router.navigate([this.searchObjectAccueil.component]).then();
      this.activeSearchAccueil = false;
      this.searchObjectAccueil.component = '';

    }else{
      this.activeSearchComponentAccueil();
    }
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() titreNavbar: string;
  @Input() logged: boolean;
  token: string;
  userId: number;
  affichePages: boolean;
  afficheLogin: boolean;
  afficheLogout: boolean;
  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    if (this.titreNavbar === 'Error mode'){
      console.log('erreur');
    }
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
    this.router.navigate(['/']).then();
  }
}

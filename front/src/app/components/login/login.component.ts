import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService } from '../../services/Auth.service';
import { TokenEntityService } from '../../services/tokenEntity.service';
@Component({
  providers: [
    AuthService,
    TokenEntityService
  ],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  errorMessage: string;
  logged: boolean = false;
  privateToken: string;
  @Output() storages: EventEmitter<object> = new EventEmitter();
  loginObject: any = {};
  constructor(private router: Router, private token: TokenEntityService, private Auth: AuthService) { }
  setLogin() {
      const mail = this.loginObject.mail;
      const password = this.loginObject.password;
      this.Auth.Login(mail, password).subscribe(data => {
        TokenEntityService.setToken(data);
        this.router.navigate(['/news']).then();
      });
    this.Auth.getUsers(mail, password).subscribe( data =>{
      localStorage.setItem('idUser',JSON.stringify(data.id));
    });
    return this.logged = true;
  }
  ngOnInit() {
    this.privateToken = localStorage.getItem('token');
  }
}

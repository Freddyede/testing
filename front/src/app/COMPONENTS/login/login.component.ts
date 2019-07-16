import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { AuthService } from '../../SERVICES/Auth.service';
import { TokenEntityService } from '../../SERVICES/tokenEntity.service';
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
  privateToken: boolean;
  @Output() notify: EventEmitter<object> = new EventEmitter();
  @Output() storages: EventEmitter<object> = new EventEmitter();
  loginObject: any = {};
  constructor(private httpClient: HttpClient, private router: Router, private token: TokenEntityService, private Auth: AuthService) { }
  setLogin() {
      const mail = this.loginObject.mail;
      const password = this.loginObject.password;
      this.Auth.Login(mail, password).subscribe(data => {
        TokenEntityService.setToken(data);
      });
    this.Auth.getUsers(mail, password).subscribe( data =>{
      localStorage.setItem('idUser', JSON.stringify(data));
    });
    this.logged = true;
    this.privateToken = !!localStorage.getItem('token');
  }
  deleteAlert() {
    this.errorMessage = null;
  }
  ngOnInit() { }
}

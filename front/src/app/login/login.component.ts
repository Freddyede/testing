import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService } from '../services/Auth.service';
import {MessageLoginService} from '../services/message-login.service';
import {UserServices} from '../services/user.services';
import {TokenService} from '../services/token.service';

@Component({
  providers: [
    AuthService,
    UserServices,
    TokenService
  ],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  successMessage: string;
  errorMessage: string;
  logged: false;
  id: number;
  @Output() notify: EventEmitter<object> = new EventEmitter();
  @Output() storages: EventEmitter<object> = new EventEmitter();
  loginObject: any = {};
  constructor(private httpClient: HttpClient,
              private router: Router,
              private Auth: AuthService,
              private token: TokenService,
              private usersDetails: UserServices,
              private Message: MessageLoginService) { }
  setLogin() {
    this.activeToken();
    const regex = /^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;
    if (regex.test(this.loginObject.mail)) {
      const mail = this.loginObject.mail;
      const password = this.loginObject.password;
      this.Auth.Login(mail, password).subscribe(data => {
        if (data.id) {
          // @ts-ignore
          this.successMessage = 'Vous vous êtes enregistrer avec succès';
          this.Message.setMessage(this.successMessage);
          return this.router.navigate(['pages']);
        }
        });
    } else {
      this.errorMessage = 'Votre adresse email n\'est pas correct';
    }
  }
  activeToken() {
    this.token.getToken(this.loginObject).subscribe(data => {
      localStorage.setItem('idUser', data[1]);
      localStorage.setItem('token', data[0]);
    });
  }
  deleteAlert() {
    this.errorMessage = null;
  }
  ngOnInit() { }
}

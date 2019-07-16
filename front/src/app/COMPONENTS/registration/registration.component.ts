import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AuthService } from '../../SERVICES/Auth.service';
import {Router} from '@angular/router';

// @ts-ignore
// @ts-ignore
@Component({
  providers: [AuthService],
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  title = 'Navigation';
  error: boolean;
  errorMessage: string;
  @Output() LoginStart: EventEmitter<any> = new EventEmitter();
  registrationActive = true;
  registrationObject: any = {
  };
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private auth: AuthService, private router: Router) {
  }
  setValeurRegistration() {
    this.registrationActive = false;
    const obj = this.registrationObject;
    const regexEmail = /^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;
    if (regexEmail.test(this.registrationObject.mail)) {
      this.auth.Registration(obj).subscribe();
      this.LoginStart.emit('login');
      this.router.navigate(['/login']).then();
    } else {
      if (!regexEmail.test(this.registrationObject.mail)) {
        this.error = true;
        this.errorMessage = 'Votre adresse email n\'est pas correct';
      }
    }
  }
  deleteAlertMessage() {
    this.error = false;
    this.errorMessage = null;
  }
  ngOnInit() {
  }
}

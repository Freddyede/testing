import {Component, EventEmitter, OnInit, Output} from '@angular/core';
<<<<<<< HEAD:front/src/app/COMPONENTS/registration/registration.component.ts
import { AuthService } from '../../SERVICES/Auth.service';
=======
import {AuthService} from '../../services/Auth.service';
>>>>>>> develop:front/src/app/components/registration/registration.component.ts
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
    console.log(this.registrationObject);
    const regexEmail = /^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;
    if (regexEmail.test(this.registrationObject.mail)) {
      this.auth.Registration(obj).subscribe(data => console.log(data));
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

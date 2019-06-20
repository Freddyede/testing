import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../services/Auth.service';
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
    this.auth.Registration(obj).subscribe();
    this.LoginStart.emit('login');
    this.router.navigate(['/login']).then();
  }
  ngOnInit() {
  }
}

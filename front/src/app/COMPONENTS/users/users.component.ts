import { Component, OnInit } from '@angular/core';
import {UserServices} from '../services/user.services';
import {Router} from '@angular/router';

@Component({
  providers: [UserServices],
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = 'Modification utilisateur';
  private objectUser: object;
  private logged: boolean;
  private newObjectUser: any = {};

  constructor(private userService: UserServices, private router: Router) { }

  ngOnInit() {
    console.log(localStorage.getItem('idUser'));
    this.userService.findBy(localStorage.getItem('idUser'), localStorage.getItem('token'))
      .subscribe(data => {
        this.objectUser = data;
      });
    this.logged = localStorage.getItem('token') !== null;
  }
  setUsers() {
    this.userService.putUsers(localStorage.getItem('idUser'), localStorage.getItem('token'), this.newObjectUser).subscribe(() => this.router.navigate(['pages']));
  }

}

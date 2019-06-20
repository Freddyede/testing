import { Component, OnInit } from '@angular/core';
import {UserServices} from '../services/user.services';

@Component({
  providers: [UserServices],
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = 'Modification utilisateur';
  private objectUser: object;
  private newObjectUser: any = {};
  constructor(private userService: UserServices) { }

  ngOnInit() {
    console.log(localStorage.getItem('idUser'));
    this.userService.findBy(localStorage.getItem('idUser')).subscribe(data => this.objectUser = data);
  }
  setUsers() {
    console.log(this.newObjectUser);
  }

}

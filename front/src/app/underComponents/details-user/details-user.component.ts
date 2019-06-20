import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserServices} from '../../services/user.services';

@Component({
  providers: [UserServices],
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
  id: number;
  objectUser: object;
  constructor(private route: ActivatedRoute, private userService: UserServices) { }
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.findBy(this.id).subscribe( data => this.objectUser = data);
  }

}

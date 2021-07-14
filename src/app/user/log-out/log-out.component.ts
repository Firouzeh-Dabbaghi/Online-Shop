import { Component, OnInit } from '@angular/core';

import { User } from '../user.model';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onlogOut() {
    this.userService.currentUser.next(new User);
  }
}

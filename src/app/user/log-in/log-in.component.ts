import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { UserService } from './../user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  userNotFound = false;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    const value = form.value;

    const isExists = this.userService.isExistUser(value.username, value.password);
    if (isExists) {
      this.userService.login(value.username, value.password)
      this.router.navigate(['/'], { relativeTo: this.route });
      this.userNotFound = false;
    } else {
      this.userNotFound = true;
    }
  }
}

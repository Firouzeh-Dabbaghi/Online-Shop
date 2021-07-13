import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User, UserPageState } from './user.model';

import { NgForm } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = new User(null, '', '', '', '', '', null);
  pageState = UserPageState.SignUp;
  userMode = UserPageState
  constructor(
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.pageState = this.route.snapshot.params['pageState'];
    if (id > 0) {
      this.user = this.userService.getuser(id);
    }

    this.route.params
      .subscribe(
        (params: Params) => {
          this.getParamsRoute(params);
        }
      );
  }

  private getParamsRoute(params: Params) {
    this.user = this.userService.getuser(+params['id']);
    this.pageState = this.route.snapshot.params['pageState'];
  }

  onAddUser(form: NgForm) {
    const value = form.value;
    //value.name
  }
}

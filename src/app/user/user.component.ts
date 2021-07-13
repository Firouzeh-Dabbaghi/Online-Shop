import { Component, OnInit } from '@angular/core';
import { User, UserMode } from './user.model';

import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  mode = UserMode.SignUp;
  userMode=UserMode
  constructor(
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    const edit = +this.route.snapshot.params['edit'];

    if (id > 0) {
      this.user = this.userService.getuser(id);
      if (edit)
        this.mode = UserMode.Edit;
      else
        this.mode = UserMode.ReadOnly
    }
  }

  onAddUser(form: NgForm) {
    const value = form.value;
    //value.name
  }
}

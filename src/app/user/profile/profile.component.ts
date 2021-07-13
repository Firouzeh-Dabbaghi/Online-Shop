import { Component, OnInit } from '@angular/core';

import { UserPageState } from './../user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  pageState = UserPageState
  constructor() { }

  ngOnInit() {
  }

}

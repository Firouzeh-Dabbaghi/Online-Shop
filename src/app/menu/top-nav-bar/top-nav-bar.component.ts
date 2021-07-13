import * as $ from "jquery";

import { Component, OnInit } from "@angular/core";
import { User, UserPageState } from './../../user/user.model';

import { UserService } from './../../user/user.service';

@Component({
  selector: "topnav-bar",
  templateUrl: "./top-nav-bar.component.html"
})
export class TopNavBarComponent implements OnInit {
  showProfileMenu = false;
  showBasketMenu = false;
  pageState = UserPageState;
  currentUser: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.currentUser
      .subscribe((x: User) => {
        this.currentUser = `${x.name} ${x.family}`
      })
  }

  //#region Design
  toggleClicked(event: MouseEvent) {
    var body = $("body");
    var menu = $("#sidebar-menu");

    // toggle small or large menu
    if (body.hasClass("nav-md")) {
      menu.find("li.active ul").hide();
      menu
        .find("li.active")
        .addClass("active-sm")
        .removeClass("active");
    } else {
      menu.find("li.active-sm ul").show();
      menu
        .find("li.active-sm")
        .addClass("active")
        .removeClass("active-sm");
    }
    body.toggleClass("nav-md nav-sm");
  }

  onClickProfile() {
    this.showProfileMenu = !this.showProfileMenu
  }

  onClickBasket() {
    this.showBasketMenu = !this.showBasketMenu
  }
  //#endregion
}

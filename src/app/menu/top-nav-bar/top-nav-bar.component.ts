import * as $ from "jquery";

import { Component } from "@angular/core";

@Component({
  selector: "topnav-bar",
  templateUrl: "./top-nav-bar.component.html"
})
export class TopNavBarComponent {
  showProfileMenu = false;
  showBasketMenu = false;
  constructor() { }

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

  ngOnInit() {
    console.log("hello `topnavbar` component");
  }

  ngAfterViewInit() { }

  onClickProfile() {
    this.showProfileMenu = !this.showProfileMenu
  }
  
  onClickBasket() {
    this.showBasketMenu = !this.showBasketMenu
  }
}

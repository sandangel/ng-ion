import {HomePage} from "../pages/home/home";
import {Component, OnInit} from "@angular/core";

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class AppComponent implements OnInit {
  rootPage = HomePage;

  constructor() {}

  ngOnInit() {}
}

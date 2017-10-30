import {LoginPage} from "../login/login";
import {NavController} from "ionic-angular";
import {Component} from "@angular/core";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  message = "Welcome!";

  constructor(private navCtrl: NavController) {}

  toLogin() {
    this.navCtrl.push(LoginPage);
  }
}

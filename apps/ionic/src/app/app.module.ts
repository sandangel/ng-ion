import {LoginPageModule} from "../pages/login/login.module";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NxModule} from "@nrwl/nx";
import {IonicApp, IonicModule} from "ionic-angular";

import {HomePage} from "../pages/home/home";
import {AppComponent} from "./app.component";

const PAGES = [LoginPageModule];

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), IonicModule.forRoot(AppComponent), ...PAGES],
  declarations: [AppComponent, HomePage],
  entryComponents: [HomePage, AppComponent],
  bootstrap: [IonicApp]
})
export class AppModule {}

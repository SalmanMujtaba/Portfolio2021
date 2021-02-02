import { Component } from "@angular/core";
import { Redirect } from "./../services/redirect.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  isCollapsed: any;
  constructor(private redirects: Redirect) {
    window.scroll(0, 0);
  }
  title = "Welcome to SM's website!";

  goToGitHub() {
    this.redirects.goToGithub();
  }

  goToLinkedIn() {
    this.redirects.goToLinkedIn();
  }

  goToFacebook() {
    this.redirects.goToFaceBook();
  }
}

import { Component } from "@angular/core";
import { Redirect } from "./../../services/redirect.service";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent {
  constructor(private redirects: Redirect) {}

  goToGithub(): void {
    this.redirects.goToGithub();
  }

  goToLinkedIn(): void {
    this.redirects.goToLinkedIn();
  }

  goToFacebook() {
    this.redirects.goToFaceBook();
  }

  goToTwitter() {
    this.redirects.goToTwitter();
  }
}

import { Component, OnInit } from "@angular/core";
import { Redirect } from "./../../services/redirect.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
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

  ngOnInit() {}
}

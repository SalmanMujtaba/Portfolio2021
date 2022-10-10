import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from "@angular/core";

import { Redirect } from "./../../services/redirect.service";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent implements AfterViewInit {
  @ViewChild("animatedText") animatedText: ElementRef;
  constructor(private redirects: Redirect) {

  }

  ngAfterViewInit() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7
    };
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animatedText.nativeElement.classList.add("text-to-animate", "typewriter-animation");
        } else {
          window.requestAnimationFrame(() => {
            this.animatedText.nativeElement.classList.remove("text-to-animate", "typewriter-animation");
          });
        }
      }), options
    });
    observer.observe(document.getElementById('about'));
  }

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

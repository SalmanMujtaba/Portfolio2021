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
          this.animatedText.nativeElement.classList.add("text", "animation");
        } else {
          this.animatedText.nativeElement.classList.remove("text", "animation");
        }
      }), options
    });
    observer.observe(document.getElementById('about'));
  }

  callbackFunc(entries, observer) {
    entries.forEach(entry => {
      this.toggleAnimation(entry.isIntersecting);
    });
  }

  toggleAnimation(isVisible): void {
    if (isVisible) {
      this.animatedText.nativeElement.classList.add("text animation");
    } else {
      this.animatedText.nativeElement.classList.remove("text animation");
    }
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

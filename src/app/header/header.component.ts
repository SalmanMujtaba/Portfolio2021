import { DOCUMENT } from "@angular/common";
import { AfterViewInit, ChangeDetectionStrategy, Component, Inject } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements AfterViewInit {
  isExpanded: boolean;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngAfterViewInit(): void {
    // Fix for expanded navbar (by default) in mobile.
    const fontLinks = Array.from(this.document.getElementsByClassName("font-links") as HTMLCollectionOf<HTMLElement>);
    if (fontLinks[0]?.parentElement?.style?.height === '0px' || window.getComputedStyle(fontLinks[0]?.parentElement)?.getPropertyValue('height') === '0px') {
      fontLinks[0].style.visibility = 'hidden';
    }
    const hamButton = this.document.querySelector('[aria-label="Toggle navigation"]');
    hamButton.addEventListener('click', (e) => {
      this.isExpanded = !this.isExpanded;
      if (this.isExpanded) {
        fontLinks[0].style.visibility = 'unset';
      } else {
        fontLinks[0].style.visibility = 'hidden';
      }
    });

  }
}

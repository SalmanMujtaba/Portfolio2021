import { DOCUMENT } from "@angular/common";
import { AfterViewInit, ChangeDetectionStrategy, Component, Inject } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements AfterViewInit {
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngAfterViewInit(): void {
    let navbar = document.getElementsByClassName("navbar-collapse")[0] as HTMLElement;
    if (navbar) {
      navbar.classList.add("collapse");
    }
  }
}

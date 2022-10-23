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
    // let navbar = document.getElementById("navbarCollapse") as HTMLElement;
    // let links = navbar.firstElementChild as HTMLElement;
    // links?.classList.add("header-collapsed-navbar");

    // document.getElementsByClassName("navbar-toggler ")[0]?.addEventListener("click", (event) => {
    //   if (navbar?.style?.height === '0px') {
    //     links?.classList.remove("header-collapsed-navbar");
    //   } else {
    //     links?.classList.add("header-collapsed-navbar");
    //   }
    // });
  }
}

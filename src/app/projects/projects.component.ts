import { ChangeDetectionStrategy, Component } from "@angular/core";

import { Redirect } from "./../../services/redirect.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  constructor(private redirects: Redirect) { }


  goToExpenseApp() {
    this.redirects.goToExpensifyApp();
  }

  goToAngularApp() {
    this.redirects.goToContactForm();
  }

  goToRecipeIngredientApp() {
    this.redirects.goToRecipeIngredient();
  }

  goToSparkApp() {
    this.redirects.goToSparkStreaming();
  }

  goToAndroidApp() {
    this.redirects.goToAndroid();
  }

  goToLyricsApp() {
    this.redirects.goToLyricsApp();
  }

  goTotableau() {
    this.redirects.goToTableau();
  }

  goToChatApp() {
    this.redirects.goToNodeChatApp();
  }
}

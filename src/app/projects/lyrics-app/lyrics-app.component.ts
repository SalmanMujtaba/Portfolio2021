import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "[app-lyrics]",
  templateUrl: "./lyrics-app.component.html",
  styleUrls: ["./lyrics-app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LyricsAppComponent {
  constructor() { }

}

import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "[app-picklebook]",
  templateUrl: "./picklebook.component.html",
  styleUrls: ["./picklebook.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PicklebookComponent {
  constructor() { }

}

import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "[app-tripmanager]",
  templateUrl: "./trip-manager.component.html",
  styleUrls: ["./trip-manager.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripManagerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

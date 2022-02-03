import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "[app-expensify]",
  templateUrl: "./expensify.component.html",
  styleUrls: ["./expensify.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensifyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

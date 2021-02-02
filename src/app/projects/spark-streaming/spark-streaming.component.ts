import { Component, OnInit } from "@angular/core";
import { Redirect } from "./../../../services/redirect.service";

@Component({
  selector: "[app-sparkstreaming]",
  templateUrl: "./spark-streaming.component.html",
  styleUrls: ["./spark-streaming.component.scss"],
})
export class SparkStreamingComponent implements OnInit {
  constructor(private redirects: Redirect) {}

  goToGithub(): void {
    this.redirects.goToSparkStreaming();
  }

  ngOnInit() {}
}

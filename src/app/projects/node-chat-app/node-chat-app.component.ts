import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "[app-node-chat-app]",
  templateUrl: "./node-chat-app.component.html",
  styleUrls: ["./node-chat-app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NodeChatAppComponent {
  constructor() { }

}

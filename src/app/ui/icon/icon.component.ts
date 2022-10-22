import { Component, Input, OnInit } from '@angular/core';

import AppConstants from "../../../app.constants";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() name: string;
  src: string;
  constructor() { }

  ngOnInit(): void {
    this.src = this.getIcon();
  }

  getIcon() {
    switch (this.name) {
      case AppConstants.get("ANGULAR_LABEL"):
        return AppConstants.get("ANGULAR_ICON_LINK");
      case AppConstants.get("REACT_LABEL"):
        return AppConstants.get("REACT_ICON_LINK");
      case AppConstants.get("JAVASCRIPT_LABEL"):
        return AppConstants.get("JAVASCRIPT_ICON_LINK");
      case AppConstants.get("NODE_LABEL"):
        return AppConstants.get("NODE_ICON_LINK");
      case AppConstants.get("NEXT_LABEL"):
        return AppConstants.get("NEXT_ICON_LINK");
      case AppConstants.get("DATABASE_LABEL"):
        return AppConstants.get("DATABASE_ICON_LINK");
      case AppConstants.get("HTML_LABEL"):
        return AppConstants.get("HTML_ICON_LINK");
      case AppConstants.get("CSS_LOGO_LABEL"):
        return AppConstants.get("CSS_ICON_LINK");
      case AppConstants.get("NEST_LABEL"):
        return AppConstants.get("NEST_ICON_LINK");
    }
  }

}

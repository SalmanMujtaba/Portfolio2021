import AppConstants from "../../../src/app.constants";
import { Component } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent {
  angular = AppConstants.get("ANGULAR_LABEL");
  react = AppConstants.get("REACT_LABEL");
  node = AppConstants.get("NODE_LABEL");
  nest = AppConstants.get("NEST_LABEL");
  database = AppConstants.get("DATABASE_LABEL");
  next = AppConstants.get("ANGULAR_LABEL");
  css = AppConstants.get("CSS_LOGO_LABEL");
  html = AppConstants.get("HTML_LABEL");
  javascript = AppConstants.get("JAVASCRIPT_LABEL");
  constructor() { }


}

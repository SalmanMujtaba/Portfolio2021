import { ComponentType, ToastService } from 'ng-uikit-pro-standard';

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
interface IndividualConfig {
  /**
   * toast time to live in milliseconds
   * default: 5000
   */
  timeOut?: number | any;
  /**
   * toast show close button
   * default: false
   */
  closeButton?: boolean;
  /** time to close after a user hovers over toast */
  /**
   * show toast progress bar
   * default: false
   */
  extendedTimeOut?: number | any;
  /**
   * show toast progress bar
   * default: false
   */
  progressBar?: boolean;
  /**
   * render html in toast message (possibly unsafe)
   * default: false
   */
  enableHtml?: boolean;
  /**
   * css class on toast component
   * default: toast
   */
  toastClass?: string;
  /**
   * css class on toast container
   * default: toast-top-right
   */
  positionClass?: string | any;
  /**
   * css class on to toast title
   * default: toast-title
   */
  titleClass?: string;
  /**
   * css class on to toast title
   * default: toast-title
   */
  messageClass?: string;
  /**
   * clicking on toast dismisses it
   * default: true
   */
  tapToDismiss?: boolean;
  /**
   * Angular toast component to be shown
   * default: Toast
   */
  toastComponent?: ComponentType<any> | any;
  /**
   * Helps show toast from a websocket or from event outside Angular
   * default: false
   */
  onActivateTick?: boolean;
  /**
   * actionButton - Field will create action button in toast, and assing parameter's value as button text
   */
  actionButton?: string;
  /**
   * - Adds class to the toast action button
   */
  actionButtonClass?: string;
  opacity?: number;
}
@Injectable({
  providedIn: "root",
})
export class ContactService {
  options: IndividualConfig;
  constructor(private http: HttpClient, private toast: ToastService) {
    this.options = { closeButton: true, progressBar: true, actionButton: 'Action', tapToDismiss: true };
  }

  sendMessage(form) {
    let formData = new FormData();
    formData.append("name", form.get("name").value);
    formData.append("email", form.get("email").value);
    formData.append("message", form.get("message").value);
    this.http
      .post(
        "https://script.google.com/macros/s/AKfycbwc5fmX5rWVmdina3Jr6A56jlvcZ5sBanS0T80G/exec",
        formData
      )
      .subscribe(
        {
          next: (response) => response["result"] == "success" && this.toast.success("Email has been sent!", this.options),
          error: () => this.toast.error("We could not send your email", this.options)
        }
      );
  }
}

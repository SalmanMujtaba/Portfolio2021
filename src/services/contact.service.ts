import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor() { }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm(process.env.EMAIL_JS_SERVICE_ID, process.env.EMAIL_JS_TEMPLATE_ID, e.target as HTMLFormElement, process.env.EMAIL_JS_PUBLIC_KEY)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}

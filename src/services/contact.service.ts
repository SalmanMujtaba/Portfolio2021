import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor(private http: HttpClient) { }

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
      .subscribe({
        complete: () => { }, // completeHandler
        error: (error) => { console.log(error); },    // errorHandler 
        next: (response) => {
          if (response['result'] === 'success') {

          }
        }    // nextHandler
      }

        // (response) => {
        //   // choose the response message
        //   if (response["result"] == "success") {
        //   }
        // },
        // (error) => {
        //   console.log(error);
        // }
      );
  }
}
